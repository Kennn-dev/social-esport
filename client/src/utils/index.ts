import { Area } from "react-easy-crop/types";
import { ALERT_TYPE } from "src/constains";
import COLORS from "src/constains/colors";
import { ResponseUserDto } from "src/graphql/types/graphql";

export function readFileAsText(file: Blob): Promise<any> {
  return new Promise(function (resolve, reject) {
    let fr = new FileReader();
    fr.onload = function () {
      resolve(fr.result);
    };

    fr.onerror = function () {
      reject(fr);
    };

    // fr.readAsText(file);
    fr.readAsDataURL(file);
  });
}

export function getColorAlert(type: ALERT_TYPE): string {
  switch (type) {
    case ALERT_TYPE.ERR:
      return COLORS.lightRed;

    default:
      return COLORS.bgBlock6;
  }
}

export function getFullname(
  user: Omit<ResponseUserDto, "__typename"> | null | undefined
): string {
  if (!user) {
    return "Unknown";
  }
  return `${user.lastName} ${user.firstName}`;
}

export function pick<T = any>(obj: T, keys: string[]): T {
  const rs: any = {};
  for (let key of keys) {
    rs[key] = obj[key];
  }

  return rs;
}

export async function base64ToFile(str: string): Promise<File> {
  const file = await fetch(str)
    .then((res) => res.blob())
    .then((blob) => {
      return new File([blob], "File name", { type: "image/png" });
    });
  return file;
}

export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous"); // needed to avoid cross-origin issues on CodeSandbox
    image.src = url;
  });

export function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
}

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 */

export default async function getCroppedImg(
  imageSrc: any,
  pixelCrop: Area,
  rotation = 0,
  flip = { horizontal: false, vertical: false }
): Promise<any> {
  console.log(imageSrc, pixelCrop, rotation);

  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return null;
  }

  const rotRad = getRadianAngle(rotation);

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  );

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
  ctx.translate(-image.width / 2, -image.height / 2);

  // draw rotated image
  ctx.drawImage(image, 0, 0);

  // croppedAreaPixels values are bounding box relative
  // extract the cropped image using these values
  const data = ctx.getImageData(
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height
  );

  // set canvas width to final desired crop size - this will clear existing context
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  // paste generated rotate image at the top left corner
  ctx.putImageData(data, 0, 0);

  // As Base64 string
  // return canvas.toDataURL('image/jpeg');

  // As a blob
  return new Promise((resolve, reject) => {
    canvas.toBlob((fileF: any) => {
      console.log({ fileF });
      // resolve(URL.createObjectURL(fileF));
      resolve(fileF);
    }, "image/jpeg");
  });
}
