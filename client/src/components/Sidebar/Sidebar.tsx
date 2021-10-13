import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as colors from "../../constains/colors";
import { AvatarList, Avatar } from "../Avatar/index";
import { Button } from "../Buttons/index";

import { GlobalIcon, HomeIcon, MessageIcon, VideoIcon } from "../Icons/index";

const Layout = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.lightGray};
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  overflow-y: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
  }
  svg {
    width: 1.25rem;
    height: auto;
  }
`;

const ButtonSidebar = styled(Button)`
  justify-content: flex-start;
  padding: 1.25rem 1.5rem;
  svg {
    path {
      stroke: ${({ color, theme }) =>
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
const ProfileButton = styled.div`
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.bgBlock1};

  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.bgBlock2};
  }
`;

export default function Sidebar() {
  return (
    <Layout>
      <ProfileButton>
        <Link to="/dashboard/profile">
          <Avatar reverse={true} />
        </Link>
      </ProfileButton>
      <ButtonWrapper>
        <Link to="/dashboard">
          <ButtonSidebar color="primary">
            <HomeIcon color={colors.white} />
            Home
          </ButtonSidebar>
        </Link>
        <Link to="/dashboard/discover">
          <ButtonSidebar>
            <GlobalIcon color={colors.white} />
            Discover
          </ButtonSidebar>
        </Link>
        <Link to="/dashboard/montage">
          <ButtonSidebar>
            <VideoIcon color={colors.white} />
            Montages
          </ButtonSidebar>
        </Link>
        <Link to="/dashboard/message">
          <ButtonSidebar>
            <MessageIcon color={colors.white} />
            Messages
          </ButtonSidebar>
        </Link>
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
