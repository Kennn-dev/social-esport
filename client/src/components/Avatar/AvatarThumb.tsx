import React from "react";
import COLORS from "src/constains/colors";
import { ResponseUserDto } from "src/graphql/types/graphql";
import styled from "styled-components";

type Props = {
  user: ResponseUserDto | null;
  width: string | number;
  height: string | number;
};

const Img = styled.div<Props>`
  width: ${({ width }) => (typeof width === "number" ? width + "px" : width)};
  height: ${({ height }) =>
    typeof height === "number" ? height + "px" : height};
  background-image: url(${({ user }) =>
    user?.avatar || "https://robohash.org/none"});
  background-color: ${COLORS.darkPrimary};
  background-size: contain;
  background-position: center;
  border-radius: 50%;
  overflow: hidden;
`;

export default function AvatarThumb(props: Props) {
  return <Img {...props} />;
}