import React from "react";
import styled from "styled-components";
import LayoutFive from "./layouts/LayoutFive";
import LayoutFour from "./layouts/LayoutFour";
import LayoutThree from "./layouts/LayoutThree";
import LayoutTwo from "./layouts/LayoutTwo";

interface IProps {
  images: string[];
}
const Wrapper = styled.div``;
interface IStyledImageProps {
  src: string;
}
const Image = styled.img<IStyledImageProps>`
  width: 100%;
  height: auto;
`;

export default function ImageLayout(props: IProps) {
  const { images } = props;
  let render: React.ReactNode = null;

  if (images.length == 1) {
    render = (
      <img key={Math.random()} src={images[0]} width={"100%"} height={"auto"} />
    );
  }
  if (images.length == 2) {
    render = <LayoutTwo images={images} />;
  }

  if (images.length == 3) {
    render = <LayoutThree images={images} />;
  }
  if (images.length == 4) {
    render = <LayoutFour images={images} />;
  }
  if (images.length >= 5) {
    render = <LayoutFive images={images} />;
  }
  return <Wrapper>{render}</Wrapper>;
}
