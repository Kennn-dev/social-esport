import styled from "styled-components";
import * as colors from "../../constains/colors";
const Input = styled.input`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: ${colors.bgBlock3};
  border-radius: 1rem;
  height: fit-content;
  border: none;
  font-size: 1rem;
  color: ${colors.white};

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
