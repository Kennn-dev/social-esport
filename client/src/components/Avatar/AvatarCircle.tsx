import styled from "styled-components";
interface AvatarProps {
  width: string;
  height: string;
}
export default styled.div<AvatarProps>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "auto"};
  border-radius: 50%;
  overflow: hidden;
`;
