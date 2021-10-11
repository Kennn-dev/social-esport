import styled from "styled-components";

export default styled.div`
  border-radius: 0.75rem;
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  font-weight: 700;
  color: ${({ theme }) => theme.white};

  transition: all ease-out 0.3s;

  svg {
    width: auto;
    height: 1.25rem;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgBlock3};
  }
`;
