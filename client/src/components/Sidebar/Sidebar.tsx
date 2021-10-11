import React, { ReactNode } from "react";
import * as colors from "../../constains/colors";
import styled from "styled-components";
import { Button } from "../Buttons/index";
import { HomeIcon, GlobalIcon, VideoIcon, MessageIcon } from "../Icons/index";
import { AvatarList } from "../Avatar/index";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.lightGray};
  border-right: 1px solid ${({ theme }) => theme.gray};
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  overflow-y: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  svg {
    width: 1.25rem;
    height: auto;
  }
`;

const ButtonSidebar = styled(Button)`
  justify-content: flex-start;
  svg {
    path {
      fill: ${({ color, theme }) =>
        color === "secondary" ? theme.bgBlock1 : theme.white};
    }
  }
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FriendWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Bold = styled.span`
  font-weight: 700;
`;

export default function Sidebar() {
  return (
    <Layout>
      <ButtonWrapper>
        <ButtonSidebar color="primary">
          <HomeIcon color={colors.white} />
          Home
        </ButtonSidebar>
        <ButtonSidebar>
          <GlobalIcon color={colors.white} />
          Discover
        </ButtonSidebar>
        <ButtonSidebar>
          <VideoIcon color={colors.white} />
          Montages
        </ButtonSidebar>
        <ButtonSidebar>
          <MessageIcon color={colors.white} />
          Messages
        </ButtonSidebar>
      </ButtonWrapper>
      <SectionWrapper>
        <Bold>Your Friends</Bold>
        <FriendWrapper>
          <AvatarList
            isOnline
            name="Ken"
            avatarUrl={"https://source.unsplash.com/random/sig=122"}
          />
          <AvatarList
            isOnline
            name="Lily Bailey"
            avatarUrl={"https://source.unsplash.com/random/sig=322"}
          />
          <AvatarList
            isOnline={false}
            name="John Doe Madafaka"
            avatarUrl={"https://source.unsplash.com/random/sig=222"}
          />
        </FriendWrapper>
      </SectionWrapper>
    </Layout>
  );
}
