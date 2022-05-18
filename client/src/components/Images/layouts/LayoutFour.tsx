import React from "react";
import styled from "styled-components";
import ImageLayoutItem from "../shared/ImageLayoutItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));
  height: 30rem;
`;

const Image = styled(ImageLayoutItem)`
  grid-column: ${(p) => (p.isFull ? "span 3 / span 3" : "span 2 / span 2")};
  grid-row: ${(p) => (p.isFull ? "span 6 / span 6" : "span 2 / span 2")};
  background-size: ${(p) => (p.isFull ? "auto" : "cover")};
`;
type Props = {
  images: string[];
};
export default function LayoutFour(props: Props) {
  const { images } = props;
  return (
    <Wrapper>
      <Image isFull src={images[0]} />
      <Image src={images[1]} />
      <Image src={images[2]} />
      <Image src={images[3]} />
    </Wrapper>
  );
}
