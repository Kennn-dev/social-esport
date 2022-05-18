import React from "react";
import styled from "styled-components";

interface IProps {
  customStyle?: "default" | "plain";
}

const LayoutDefault = styled.textarea<IProps>`
  resize: none;
  max-width: 100%;
  width: 100%;
  font-family: "Ubuntu", "arial";
  line-height: 130%;
  padding: 0.75rem 1rem;
  background-color: ${(p) => p.theme.bgBlock3};
  border-radius: 8px;
  height: fit-content;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.white};
  border: 1px solid transparent;
  transition: all 0.3s ease;
  &:hover {
    border: 1px solid ${({ theme }) => theme.gray};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.bgBlock2};
  }
`;
const LayoutPlain = styled(LayoutDefault)`
  background-color: transparent;
  border: 1px solid transparent;

  padding: 0;
  &:hover {
    border: 1px solid transparent;
  }
  &:focus {
    outline: none;
    background-color: transparent;
    border: 1px solid transparent;
  }
`;
const TextArea: React.FC<
  IProps & React.ComponentProps<typeof LayoutDefault>
> = ({ customStyle = "default", ...props }) => {
  return customStyle === "default" ? (
    <LayoutDefault {...props} />
  ) : (
    <LayoutPlain {...props} />
  );
};

export default TextArea;
