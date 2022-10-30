import React, { useMemo } from "react";
import { useAppStore } from "src/store";
import styled from "styled-components";
import AvatarThumb from "./AvatarThumb";

const Layout = styled.div<{ reverse: boolean }>`
  display: flex;
  float: ${(p) => (p.reverse ? "left" : "none")};
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  gap: 1rem;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.lightGray};
`;
const Image = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;
const Text = styled.div`
  cursor: pointer;
  span {
    margin-top: 5px;
    font-size: 0.75rem;
    display: none;
  }
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1024px) {
    span {
      display: block;
    }
  }
`;
const MainText = styled.div`
  font-size: 1.075rem;
  font-weight: bold;
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
  white-space: nowrap;
  &:hover {
    color: ${(props) => props.theme.white};
  }
  @media (min-width: 768px) {
    display: block;
  }
`;

interface AvatarProps {
  reverse?: boolean;
  onClick?: () => void;
}

export default function Avatar({ reverse = false, onClick }: AvatarProps) {
  const user = useAppStore((state) => state.auth.user);
  let fullName = useMemo(() => `${user?.lastName} ${user?.firstName}`, [user]);
  return (
    <div onClick={onClick}>
      <Layout reverse={reverse}>
        <Text>
          <MainText title={fullName}>{fullName}</MainText>
          <span>3ks Followers</span>
        </Text>

        {/* <Image alt="avatar" src={src} width="100%" height="auto" /> */}
        <AvatarThumb width={48} height={48} user={user?.avatar} />
      </Layout>
    </div>
  );
}
