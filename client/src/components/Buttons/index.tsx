import React, { ReactNode } from "react";
import COLORS from "src/constains/colors";
import styled from "styled-components";

export type ColorButton =
  | "primary"
  | "no-style"
  | "secondary"
  | "link"
  | "ghost"
  | "default";
type SizeButton = "base" | "lg" | "sm";
type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, "size"> & {
  loading?: boolean;
  color?: ColorButton;
  size?: SizeButton;
  icon?: ReactNode | boolean; // false
  className?: string;
  children?: ReactNode;
  htmlType?: React.HTMLProps<HTMLButtonElement>["type"];
  block?: boolean;
};

const ButtonLayout = styled.button<ButtonProps>`
  border: ${({ color, theme }) =>
    color === "ghost" ? `2px solid ${theme.gray}` : "2px solid transparent"};
  background-color: ${({ color, theme }) =>
    color === "primary"
      ? theme.primary
      : color === "secondary"
      ? theme.white
      : color === "no-style"
      ? "transparent"
      : theme.bgBlock1};
  display: flex;
  justify-content: ${({ color }) => color !== "no-style" && "center"};
  gap: 1rem;
  align-items: center;
  width: ${({ block }) => (block ? "100%" : "fit-content")};
  color: ${({ color, theme }) =>
    color === "secondary"
      ? theme.bgBlock1
      : color === "no-style"
      ? theme.gray
      : theme.white};
  border-radius: 0.75rem;
  cursor: ${({ loading }) => (loading ? "not-allowed" : "pointer")};
  pointer-events: ${({ loading }) => (loading ? "none" : "auto")};
  transition: all ease 0.3s;

  padding: ${({ size, color }) =>
    color === "no-style"
      ? ""
      : size === "base"
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

    color: ${({ color }) =>
      color !== "secondary" ? COLORS.white : COLORS.bgBlock1};
  }

  input {
    display: none;
  }
`;

const Loader = styled.div<{ size: SizeButton }>`
  width: ${({ size }) =>
    size === "base" ? "1rem" : size === "lg" ? "1.25rem " : "14px"};
  height: ${({ size }) =>
    size === "base" ? "1rem" : size === "lg" ? "1.25rem " : "14px"};

  .icon-load {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const Icon = ({ size }: { size: SizeButton }) => (
  <Loader style={{ flex: "none" }} size={size}>
    <svg
      className="icon-load"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        style={{ opacity: 0.25 }}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        style={{ opacity: 0.75 }}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </Loader>
);

const Button = ({
  color = "default",
  icon = false,
  children,
  className,
  size = "base",
  htmlType = "button",
  block = true,
  loading,
  ...props
}: ButtonProps) => (
  <ButtonLayout
    {...(props as any)}
    size={size}
    color={color}
    className={className || ""}
    loading={loading}
    type={htmlType}
    block={block}
  >
    {loading ? <Icon size={size} /> : icon || null}
    {children}
    {/* {htmlType === "submit" && <input type="submit" />} */}
  </ButtonLayout>
);
export { Button };
