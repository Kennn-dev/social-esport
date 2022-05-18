import React from "react";
import styled from "styled-components";
import ButtonAddImage from "../Buttons/ButtonAddImage";

type Props = {
  onChange: (fileList: string[]) => void;
  src: string[];
};

export default function ImageSelectList(props: Props) {
  const { src, onChange } = props;

  return (
    <Wrapper srcLength={src.length}>
      {src.length && <ButtonAddImage onChange={onChange} />}
      {src?.map((sourceStr, index) => (
        <Box key={index}>
          <ImageBox src={sourceStr} />
        </Box>
      ))}
    </Wrapper>
  );
}
const ImageBox = styled.img`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  min-width: 100%;
  width: auto;
  object-fit: cover;
`;
interface IWrapper {
  srcLength: number;
}
const Wrapper = styled.div<IWrapper>`
  width: 100%;
  height: ${(p) => (p.srcLength ? "115px" : 0)};
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  text-align: left;
  padding-bottom: 10px;
`;
const Box = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 96px;
  border-radius: 5px;
  height: 96px;
  margin-right: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;
