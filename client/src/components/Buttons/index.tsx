import React, { ReactNode } from "react";
import * as colors from "../../constains/colors";
import styled from "styled-components";

type TypeButton = "primary" | "secondary" | "link" | "default";

interface ButtonProps {
  type?: TypeButton; //	default
  icon?: ReactNode | boolean; // false
  isActive?: boolean; //	false
  className?: string;
  children?: ReactNode;
}
interface ButtonLayoutProps {
  isActive?: boolean;
}
const ButtonLayout = styled.div<ButtonLayoutProps>`
  background-color: ${(props) =>
    props.isActive ? colors.primary : colors.bgBlock1};
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem 1.5rem;
  width: 100%;
  color: ${({ isActive }) => (isActive ? colors.white : colors.lightGray)};
  font-weight: 700;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    color: ${colors.white};
    background-color: ${(props) =>
      props.isActive ? colors.darkPrimary : colors.bgBlock3};
  }
`;

const Button = ({
  type = "default",
  icon = false,
  isActive = false,
  children,
  className,
}: ButtonProps) => (
  <ButtonLayout className={className || ""} isActive={isActive}>
    {icon || null}
    {children}
  </ButtonLayout>
);
export { Button };
