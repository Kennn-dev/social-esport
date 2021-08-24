import styled from "styled-components";
import * as colors from "../../constains/colors";

export default styled.div`
  border-radius: 0.75rem;
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  font-weight: 700;
  color: ${colors.white};

  transition: all ease-out 0.3s;
  &:hover {
    background-color: ${colors.bgBlock3};
  }
`;
