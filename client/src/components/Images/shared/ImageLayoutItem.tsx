import styled from "styled-components";
type TImage = {
  src: string;
  isTop?: boolean;
  isFull?: boolean;
  count?: number;
};
const ImageLayoutItem = styled.div<TImage>`
  grid-column: ${(p) => (p.isTop ? "span 6 / span 6" : "span 4 / span 4")};
  grid-row: ${(p) => (p.isTop ? "span 3 / span 3" : "span 2 / span 2")};
  background-image: url(${(p) => p.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  width: auto;
  height: 100%;
  border: 1px solid ${(p) => p.theme.bgBlock2};
`;

export default ImageLayoutItem;
