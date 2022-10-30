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
