import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as colors from "../../constains/colors";
import { AvatarList, Avatar } from "../Avatar/index";
import { Button } from "../Buttons/index";
import { ColorButton } from "../../components/Buttons/index";
import { useLocation } from "react-router-dom";

import {
  GlobalIcon,
  HomeIcon,
  MessageIcon,
  VideoIcon,
  CategoryIcon,
  UserIcon,
  SwapIcon,
} from "../Icons/index";
interface IProfileMenu {
  isActive: boolean;
}

export default function Sidebar() {
  const location = useLocation();
  const [isActiveProfile, setIsActiveProfile] = React.useState(false);

  const setActive = (path: string): ColorButton => {
    const { pathname } = location;
    if (pathname === path) {
      return "primary";
    }
    const vl = pathname.split("/dashboard");

    if (vl[1].includes(path)) {
      return "primary";
    } else {
      return "default";
    }
  };

  React.useEffect(() => {
    setIsActiveProfile(
      !!(setActive("/profile") === "primary") ||
        !!(setActive("/creator") === "primary")
    );
  }, [location]);

  return (
    <Layout>
      <ButtonWrapper>
        <ProfileButton
          onClick={() => {
            setIsActiveProfile(!isActiveProfile);
          }}
        >
          <Avatar reverse={true} /> <SwapIcon title="Expand" />
        </ProfileButton>
        <ProfileMenu isActive={isActiveProfile}>
          <Link to="/dashboard/profile">
            <ButtonSidebar color={setActive("/profile")}>
              <UserIcon title="Profile" color={colors.white} />
              Profile
            </ButtonSidebar>
          </Link>
          <Link to="/dashboard/creator">
            <ButtonSidebar color={setActive("/creator")}>
              <CategoryIcon title="Your Montages" color={colors.white} />
              Your Montages
            </ButtonSidebar>
          </Link>
        </ProfileMenu>
      </ButtonWrapper>
      <SectionWrapper>
        <Bold>Menu</Bold>
        <ButtonWrapper>
          <Link to="/dashboard">
            <ButtonSidebar color={setActive("/dashboard")}>
              <HomeIcon color={colors.white} />
              Home
            </ButtonSidebar>
          </Link>
          <Link to="/dashboard/discover">
            <ButtonSidebar color={setActive("/discover")}>
              <GlobalIcon color={colors.white} />
              Discover
            </ButtonSidebar>
          </Link>
          <Link to="/dashboard/montage">
            <ButtonSidebar color={setActive("/montage")}>
              <VideoIcon color={colors.white} />
              Montages
            </ButtonSidebar>
          </Link>
          <Link to="/dashboard/message">
            <ButtonSidebar color={setActive("/message")}>
              <MessageIcon color={colors.white} />
              Messages
            </ButtonSidebar>
          </Link>
        </ButtonWrapper>
      </SectionWrapper>

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
const ProfileMenu = styled.div<IProfileMenu>`
  display: ${(p) => (p.isActive ? "block" : "none")};
  margin-top: 15px;
`;
const Layout = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.lightGray};
  padding: 1rem 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  overflow-y: auto;
  transition: all 0.3s ease;
  .primary {
    background-color: ${({ theme }) => theme.bgBlock2};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
  }
  svg {
    width: 24px;
    height: 24px;
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
  padding-left: 0.75rem;
`;
const ProfileButton = styled.div<any>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 10px;

  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.gray};
  background-color: ${({ theme }) => theme.bgBlock1};

  transition: all 0.3s ease;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.bgBlock2};
  }
`;
