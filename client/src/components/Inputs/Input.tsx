import React from "react";
import styled, { CSSProp } from "styled-components";
interface InputWrapperProps {
  css?: CSSProp;
  icon?: boolean;
}
interface InputProps {
  icon?: React.ReactNode;
}
const InputWrapper = styled.input<
  InputWrapperProps & React.HTMLProps<HTMLInputElement>
>`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${({ icon }) =>
    icon ? `0.75rem 2.75rem 0.75rem 1rem` : `0.75rem 1rem`};
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

const IconWrapper = styled.div`
  position: absolute;

  right: 1rem;
  top: 50%;
  width: 1.25rem;
  height: auto;

  transform: translate(0, -50%);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const Input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = ({
  icon,
  ...props
}) => {
  return (
    <div style={{ position: "relative" }}>
      <InputWrapper {...(props as any)} icon={!!icon} />
      {icon ? <IconWrapper className="input--icon">{icon}</IconWrapper> : null}
    </div>
  );
};

export default Input;
