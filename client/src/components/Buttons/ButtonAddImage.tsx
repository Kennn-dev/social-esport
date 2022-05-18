import React, { useRef } from "react";
import { readFileAsText } from "src/utils";

import styled from "styled-components";
import { AddIcon, ImageIcon } from "../Icons";
interface IButtonAddImage {
  buttonType?: "icon" | "box";
  onChange: (fileList: string[]) => void;
}

export default function ButtonAddImage(props: IButtonAddImage) {
  const { onChange, buttonType = "box" } = props;
  const inputRef = useRef(null) as React.RefObject<HTMLInputElement>;
  let render: React.ReactNode = null;
  const handleClick = () => {
    inputRef.current?.click();
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const readers: any[] = [];
      let files: string[] = [];

      for (let i = 0; i < e.target.files.length; i++) {
        readers.push(readFileAsText(e.target.files[i]));
      }
      await Promise.all(readers).then((values) => {
        files = values;
      });
      if (onChange) {
        onChange(files);
      }
    }
  };
  if (buttonType === "box") {
    render = (
      <Box onClick={handleClick}>
        <AddButton />
        <div className="icon">
          <AddIcon />
          <Input
            type="file"
            multiple
            onChange={handleChange}
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
        </div>
      </Box>
    );
  }

  if (buttonType === "icon") {
    render = (
      <IconWrapper onClick={handleClick}>
        <ImageIcon title="Image" />
        <Input
          type="file"
          multiple
          onChange={handleChange}
          accept="image/png, image/jpeg"
          ref={inputRef}
        />
      </IconWrapper>
    );
  }
  return <>{render}</>;
}
const AddButton = styled.div`
  border: 2px dashed ${(p) => p.theme.gray};
  box-sizing: border-box;
  border-radius: 5px;
  height: 100%;
  width: 100%;
`;
const Box = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 96px;
  height: 96px;
  margin-right: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${AddButton} {
      border-color: ${(p) => p.theme.lightGray};
    }
    .icon {
      svg {
        path {
          stroke: ${(p) => p.theme.lightGray};
        }
      }
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 32px;
      height: 32px;

      path {
        stroke: ${(p) => p.theme.gray};
      }
    }
  }
`;
const IconWrapper = styled.div`
  cursor: pointer;
  .icon {
    cursor: pointer;
  }
`;
const Input = styled.input`
  display: none;
`;
