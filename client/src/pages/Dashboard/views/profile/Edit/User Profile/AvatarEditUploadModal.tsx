import React, { useRef, useState } from "react";
import AvatarEditor, { AvatarEditorProps } from "react-avatar-editor";
import { Button, CustomModal, ImageIcon } from "src/components";
import Slider from "src/components/Slider";
import { Flex } from "../layouts";
type Props = {
  handleSaveImage: (url: string) => Promise<void>;
  file: File | null;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  editorProps: Omit<AvatarEditorProps, "scale" | "ref" | "image">;
};
export default function AvatarEditUpload(props: Props) {
  const { title, editorProps, handleSaveImage, file, isOpen, setOpen } = props;

  // const [isOpen, setOpen] = useState<boolean>(false);
  const [scale, setScale] = useState<number>(1);

  const editor = useRef<AvatarEditor>(null);
  const handleChangeScale = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);

    setScale(+e.currentTarget.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSaveAfterEdit = () => {
    if (editor.current) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const canvas = editor.current.getImage().toDataURL();

      // If you want the image resized to the canvas size (also a HTMLCanvasElement)
      const canvasScaled = editor.current.getImageScaledToCanvas().toDataURL();

      console.log({ canvas, canvasScaled });

      // avatarUpload(canvasScaled).then((r) => {
      // });
      handleSaveImage(canvasScaled).then((r) => {
        handleClose();
      });
    }
  };

  return (
    <CustomModal
      title={title}
      modalProps={{
        isOpen,

        onRequestClose: handleClose,
      }}
    >
      <AvatarEditor
        {...editorProps}
        ref={editor}
        style={{ borderRadius: 8 }}
        image={file || ""}
        // width={width}
        // height={height}
        border={10}
        // borderRadius={10000}
        // color={[255, 255, 215]} // RGBA
        scale={scale}
        rotate={0}
        backgroundColor={"transparent"}
      />
      <Flex style={{ alignItems: "center", gap: 10, marginTop: 20 }}>
        <ImageIcon />
        <Slider
          onChange={handleChangeScale}
          min="1"
          defaultValue={"1"}
          step={"0.01"}
          max="2"
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
        <Button onClick={handleClose} block={false} size="sm" color="no-style">
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
    </CustomModal>
  );
}
