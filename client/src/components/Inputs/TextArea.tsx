import React from "react";
import styled from "styled-components";

interface ITextAreaProps extends React.HTMLProps<HTMLInputElement> {}
const Layout = styled.textarea<any>`
  resize: vertical;
  max-width: 100%;
  width: 100%;
  font-family: "Ubuntu", "arial";
  line-height: 130%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.bgBlock3};
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
const TextArea: React.FC<ITextAreaProps> = ({ ...props }) => {
  return <Layout {...(props as any)} />;
};

export default TextArea;
