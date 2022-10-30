import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import COLORS from "src/constains/colors";
import styled, { CSSProp } from "styled-components";
interface InputWrapperProps {
  css?: CSSProp;
  icon?: boolean;
  error?: string | null | undefined;
}
interface InputProps {
  icon?: React.ReactNode;
  registerProps?: UseFormRegisterReturn<any>;
  error?: string | null | undefined;
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
  &::-ms-reveal {
    color: white;
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

const InputError = styled.span`
  display: block;
  margin-top: 7px;
  color: ${COLORS.lightRed};
`;

const Input: React.FC<InputProps & React.HTMLProps<HTMLInputElement>> = ({
  icon,
  registerProps,
  error,
  ...props
}) => {
  return (
    <div style={{ position: "relative", ...props.style }}>
      <InputWrapper {...registerProps} {...(props as any)} icon={!!icon} />
      {icon ? <IconWrapper className="input--icon">{icon}</IconWrapper> : null}
      {error && <InputError>{error}</InputError>}
    </div>
  );
};

export default Input;
