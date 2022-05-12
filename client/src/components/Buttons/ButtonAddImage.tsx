import React from "react";

import styled from "styled-components";
import { AddIcon } from "../Icons";
const AddButton = styled.div`
  border: 2px dashed ${(p) => p.theme.gray};
  box-sizing: border-box;
  border-radius: 5px;
  height: 100%;
  width: 100%;
`;
const Box = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 96px;
  height: 96px;
  margin-right: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    ${AddButton} {
      border-color: ${(p) => p.theme.lightGray};
    }
    .icon {
      svg {
        path {
          stroke: ${(p) => p.theme.lightGray};
        }
      }
    }
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    svg {
      width: 32px;
      height: 32px;

      path {
        stroke: ${(p) => p.theme.gray};
      }
    }
  }
`;

export default function ButtonAddImage() {
  return (
    <Box>
      <AddButton />
      <div className="icon">
        <AddIcon />
      </div>
    </Box>
  );
}
