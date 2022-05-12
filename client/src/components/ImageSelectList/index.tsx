import React from "react";
import styled from "styled-components";
import ButtonAddImage from "../Buttons/ButtonAddImage";

type Props = {
  src: string[];
};

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
const Wrapper = styled.div`
  width: 100%;
  height: 115px;
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
  height: 96px;
  margin-right: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export default function ImageSelectList(props: Props) {
  const { src } = props;
  return (
    <Wrapper>
      <ButtonAddImage />
      {src?.map((sourceStr, index) => (
        <Box key={index}>
          <ImageBox src={sourceStr} />
        </Box>
      ))}
    </Wrapper>
  );
}
