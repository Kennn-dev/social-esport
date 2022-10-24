import { makeUniqueId } from "@apollo/client/utilities";
import React from "react";
import COLORS from "src/constains/colors";
import styled from "styled-components";
const Input = styled.input`
  --active: ${COLORS.primary};
  --active-inner: ${COLORS.white};
  --focus: 2px ${COLORS.darkPrimary};
  --border: ${COLORS.lightGray};
  --border-hover: ${COLORS.lightPrimary};
  --background: ${COLORS.white};
  --disabled: ${COLORS.gray};
  --disabled-inner: ${COLORS.lightGray};
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 21px;
  outline: none;
  display: inline-block;
  vertical-align: top;
  position: relative;
  margin: 0;
  cursor: pointer;
  border: 1px solid var(--bc, var(--border));
  background: var(--b, var(--background));
  transition: background 0.3s, border-color 0.3s, box-shadow 0.2s;
  &:after {
    content: "";
    display: block;
    left: 0;
    top: 0;
    position: absolute;
    transition: transform var(--d-t, 0.3s) var(--d-t-e, ease),
      opacity var(--d-o, 0.2s);
  }
  &:checked {
    --b: var(--active);
    --bc: var(--active);
    --d-o: 0.3s;
    --d-t: 0.6s;
    --d-t-e: cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  &:disabled {
    --b: var(--disabled);
    cursor: not-allowed;
    opacity: 0.9;
    &:checked {
      --b: var(--disabled-inner);
      --bc: var(--border);
    }
    & + label {
      cursor: not-allowed;
    }
  }
  &:hover {
    &:not(:checked) {
      &:not(:disabled) {
        --bc: var(--border-hover);
      }
    }
  }
  &:focus {
    box-shadow: 0 0 0 var(--focus);
  }
  &:not(.switch) {
    width: 21px;
    &:after {
      opacity: var(--o, 0);
    }
    &:checked {
      --o: 1;
    }
  }
  & + label {
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    margin-left: 4px;
  }

  &:not(.switch) {
    border-radius: 7px;
    &:after {
      width: 3px;
      height: 9px;
      border: 2px solid var(--active-inner);
      border-top: 0;
      border-left: 0;
      left: 7px;
      top: 4px;
      transform: rotate(var(--r, 20deg));
    }
    &:checked {
      --r: 43deg;
    }
  }
  &.switch {
    width: 38px;
    border-radius: 11px;
    &:after {
      left: 2px;
      top: 2px;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      background: var(--ab, var(--border));
      transform: translateX(var(--x, 0));
    }
    &:checked {
      --ab: var(--active-inner);
      --x: 17px;
    }
    &:disabled {
      &:not(:checked) {
        &:after {
          opacity: 0.6;
        }
      }
    }
  }
`;

export default function Checkbox(props: any) {
  const { children, ...inputProps } = props;
  const id = makeUniqueId("checkbox-");

  return (
    <>
      <Input id={id} type="checkbox" {...inputProps} />
      <label htmlFor={id}>{children}</label>
    </>
  );
}
