import React from "react";
import styled from "styled-components";
import ImageLayoutItem from "../shared/ImageLayoutItem";

const Wrapper = styled.div`
  display: flex;
`;
const Image = styled(ImageLayoutItem)`
  flex: 1;
  grid: none;
  width: 50%;
  height: 20rem;
`;
type Props = {
  images: string[];
};
export default function LayoutTwo(props: Props) {
  const { images } = props;
  return (
    <Wrapper>
      <Image src={images[0]} />
      <Image src={images[1]} />
    </Wrapper>
  );
}
