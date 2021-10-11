import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
interface StatusDotProps {
  isOnline?: boolean;
}
interface AvatarListProps {
  name: string;
  avatarUrl: string;
  isOnline?: boolean;
}
const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: all ease 0.3s;
  img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }

  &:hover {
    font-weight: 700;
    background-color: ${({ theme }) => theme.bgBlock2};
  }
`;

const ImageWithText = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 6rem;
  }
`;

const StatusDot = styled.div<StatusDotProps>`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isOnline ? props.theme.primary : props.theme.gray};
`;
function AvatarList({
  name,
  avatarUrl,
  isOnline,
}: AvatarListProps): JSX.Element {
  return (
    <Layout>
      <ImageWithText>
        <img alt="avatar" src={avatarUrl} width="100%" height="auto" />
        <span>{name}</span>
      </ImageWithText>
      <StatusDot isOnline={isOnline || false} />
    </Layout>
  );
}
export default AvatarList;
