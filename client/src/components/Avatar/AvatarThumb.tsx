import React from "react";
import COLORS from "src/constains/colors";
import { Maybe, ResponseUserDto } from "src/graphql/types/graphql";
import styled from "styled-components";
import CustomSkeleton from "../SkeletonCustom";

type Props = {
  user: ResponseUserDto | null | string | Maybe<string> | undefined;
  width: string | number;
  height: string | number;
  loading?: boolean;
  onClick?: () => void;
};

const Img = styled.div<Omit<Props, "loading">>`
  width: ${({ width }) => (typeof width === "number" ? width + "px" : width)};
  height: ${({ height }) =>
    typeof height === "number" ? height + "px" : height};
  background-image: url(${({ user }) =>
    typeof user === "string" ? user : user?.avatar || ""});

  background-color: ${COLORS.darkPrimary};
  background-size: contain;
  background-position: center;
  border-radius: 50%;
  overflow: hidden;
`;

export default function AvatarThumb(props: Props) {
  const { loading, ...imgProps } = props;
  return loading ? (
    <CustomSkeleton circle width={imgProps.width} height={imgProps.height} />
  ) : (
    <Img {...imgProps} />
  );
}
