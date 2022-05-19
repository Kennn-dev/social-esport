import React from "react";
import styled from "styled-components";
import ImageLayoutItem from "../shared/ImageLayoutItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(5, minmax(0, 1fr));
  height: 30rem;
`;

const Image = styled(ImageLayoutItem)`
  grid-column: ${(p) => (p.isTop ? "span 6 / span 6" : "span 4 / span 4")};
  grid-row: ${(p) => (p.isTop ? "span 3 / span 3" : "span 2 / span 2")};
  position: relative;
`;
type Props = {
  images: string[];
};
type PropsOverlay = {
  count: number;
};
const OverlayCount = styled.div<PropsOverlay>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0.7;
  background-color: ${(p) => p.theme.bgBlock1};

  &:before {
    content: "+${(p) => p.count}";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    font-weight: bold;
    color: ${(p) => p.theme.white};
  }
`;
export default function LayoutFive(props: Props) {
  const { images } = props;
  return (
    <Wrapper>
      <Image isTop src={images[0]} />
      <Image isTop src={images[1]} />
      <Image src={images[2]} />
      <Image src={images[3]} />
      <Image src={images[4]}>
        {images.length > 5 && <OverlayCount count={images.length - 5} />}
      </Image>
    </Wrapper>
  );
}
