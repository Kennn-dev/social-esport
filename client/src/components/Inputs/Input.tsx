import styled, { CSSProp } from "styled-components";
import * as colors from "../../constains/colors";
interface InputProps {
  css?: CSSProp;
}
const Input = styled.input<InputProps>`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: ${colors.bgBlock3};
  border-radius: 0.5rem;
  height: fit-content;
  border: none;
  font-size: 1rem;
  color: ${colors.white};
  border: 1px solid transparent;

  &:hover {
    border: 1px solid ${colors.gray};
  }
  &:focus {
    outline: none;
    border: 1px solid ${colors.primary};
    background-color: ${colors.bgBlock2};
  }
`;
export default Input;
