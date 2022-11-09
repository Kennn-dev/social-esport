import React from "react";
import styled from "styled-components";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  any
> & {};

const Wrapper = styled.div`
  --saturation-factor: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  /* height: 40px; */
  /* position : relative; */
  input {
    width: 100%;
    background: none;
  }
`;

export default function Slider(props: Props) {
  const { style, ...sliderProps } = props;
  return (
    <>
      <Wrapper style={style}>
        <input
          type="range"
          className="slide-input"
          id="myRange"
          {...sliderProps}
        />
      </Wrapper>
    </>
  );
}
