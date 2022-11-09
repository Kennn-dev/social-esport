import React, { useCallback, useEffect, useMemo, useState } from "react";
import Cropper from "react-easy-crop";
import { Area, Point } from "react-easy-crop/types";
import { Button, CustomModal, ImageIcon } from "src/components";
import Slider from "src/components/Slider";
import getCroppedImg from "src/utils";
import styled from "styled-components";
import { Flex } from "../layouts";
type Props = {
  handleSaveImage: (url: string | null) => Promise<void>;
  file: File | null;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
};
export default function BackgroundEditUploadModal(props: Props) {
  const { file, isOpen, setOpen, title, handleSaveImage } = props;
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
      console.log(croppedArea, croppedAreaPixels);
    },
    []
  );

  const handleChangeScale = useCallback((e) => {
    // setScale(+);
    setZoom(Number(e.currentTarget.value));
  }, []);
  const handleClose = () => {
    setOpen(false);
  };

  const handleLoadImage = useMemo(() => {
    if (!file) return "";
    return URL.createObjectURL(file);
  }, [file]);

  const handleSaveAfterEdit = async () => {
    try {
      const croppedImageUrl = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        0
      );
      handleSaveImage(croppedImageUrl).then(() => {
        handleClose();
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLoadSource = async () => {
    if (file) {
      let imageDataUrl = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };
  useEffect(() => {
    handleLoadSource();
  }, [file]);
  return (
    <CustomModal
      title={title}
      modalProps={{
        isOpen,

        onRequestClose: handleClose,
      }}
    >
      <div style={{ width: 600 }}>
        <CropperWrap>
          <Cropper
            image={handleLoadImage}
            crop={crop}
            zoom={zoom}
            aspect={1280 / 300}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            // cropSize={{ width: 1280, height: 300 }}
          />
        </CropperWrap>

        <Flex style={{ alignItems: "center", gap: 10, marginTop: 20 }}>
          <ImageIcon />
          <Slider
            onChange={handleChangeScale}
            min={"1"}
            max={"3"}
            aria-labelledby="Zoom"
            step={"0.05"}
            value={zoom}
            //   classes={{ root: "slider" }}
          />

          <ImageIcon style={{ width: 45, height: 45 }} />
        </Flex>

        <Flex
          style={{
            alignItems: "center",
            justifyContent: "end",
            gap: 30,
            marginTop: 20,
          }}
        >
          <Button
            onClick={handleClose}
            block={false}
            size="sm"
            color="no-style"
          >
            Cancel
          </Button>

          <Button
            onClick={handleSaveAfterEdit}
            block={false}
            size="sm"
            color="primary"
          >
            Save
          </Button>
        </Flex>
      </div>
    </CustomModal>
  );
}

const CropperWrap = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  max-height: 600px;
  background: transparent;
`;

function readFile(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => resolve(reader?.result as string),
      false
    );
    reader.readAsDataURL(file);
  });
}
