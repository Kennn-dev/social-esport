import React, { ReactNode } from "react";
import styled from "styled-components";

type ColorButton = "primary" | "secondary" | "link" | "ghost" | "default";
type SizeButton = "base" | "lg" | "sm";
interface ButtonProps {
  color?: ColorButton;
  size?: SizeButton;
  icon?: ReactNode | boolean; // false
  className?: string;
  children?: ReactNode;
  onClick?: (p?: any) => void;
}

const ButtonLayout = styled.button<ButtonProps>`
  border: ${({ color, theme }) =>
    color === "ghost" ? `2px solid ${theme.gray}` : "none"};
  background-color: ${({ color, theme }) =>
    color === "primary"
      ? theme.primary
      : color === "secondary"
      ? theme.white
      : theme.bgBlock1};
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  width: 100%;
  color: ${({ color, theme }) =>
    color === "secondary" ? theme.bgBlock1 : theme.white};
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all ease 0.3s;

  padding: ${({ size }) =>
    size === "base"
      ? "0.75rem 1.5rem"
      : size === "lg"
      ? "1rem 1.75rem"
      : "0.55rem 1rem"};
  font-size: ${({ size }) =>
    size === "base" ? "1rem" : size === "lg" ? "1.25rem " : "14px"};
  font-weight: bold;

  &:hover {
    background-color: ${({ color, theme }) =>
      color === "default" && theme.bgBlock4};
  }
`;

const Button = ({
  color = "default",
  icon = false,
  children,
  className,
  size = "base",
  ...props
}: ButtonProps) => (
  <ButtonLayout
    {...(props as any)}
    size={size}
    color={color}
    className={className || ""}
  >
    {icon || null}
    {children}
  </ButtonLayout>
);
export { Button };
