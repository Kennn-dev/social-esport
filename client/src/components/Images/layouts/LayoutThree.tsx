import React from "react";
import styled from "styled-components";
import ImageLayoutItem from "../shared/ImageLayoutItem";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  height: 30rem;
`;
const Image = styled(ImageLayoutItem)`
  grid-column: ${(p) => (p.isFull ? "span 2 / span 2" : "span 1 / span 1")};
  grid-row: ${(p) => (p.isFull ? "span 2 / span 2" : "span 1 / span 1")};
`;
type Props = {
  images: string[];
};
export default function LayoutThree(props: Props) {
  const { images } = props;
  return (
    <Wrapper>
      <Image isFull src={images[0]} />
      <Image src={images[1]} />
      <Image src={images[2]} />
    </Wrapper>
  );
}
