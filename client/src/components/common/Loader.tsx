import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
const Icon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180.05 361">
      <defs></defs>
      <title>Asset 1white-logo</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path className="cls-1" d="M113,193,1,258V207l112-65Z" />
          <path
            className="cls-2"
            d="M0,361V310l1-.58V258l45-26,0,51.36L178,207v51Z"
          />
          <path className="cls-3" d="M135,26.15V26L180,0Z" />
          <path
            className="cls-2"
            d="M1,181V104L135,26.15,180,0q0,37,.05,73.94L180,74l-1,81-44,26V78L45.56,129.38,46,155Z"
          />
        </g>
      </g>
    </svg>
  );
};
const LoadLayout = styled.div`
  .cls-1 {
    fill: #ff9022;
  }
  .cls-2 {
    fill: #ededed;
  }
  .cls-3 {
    fill: #9e9e9e;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  svg {
    width: 70px;
    height: 70px;
  }
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${colors.white};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`;

const Loader = () => {
  return (
    <LoadLayout>
      <div>
        <Icon />
      </div>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadLayout>
  );
};

export default Loader;
