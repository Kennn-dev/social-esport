import React from "react";
import styled from "styled-components";
import Avatar from "../../components/Avatar/Avatar";
import logo from "../../assets/logo.png";
import * as colors from "../../constains/colors";
import Input from "../Inputs/Input";
import Grids from "../containers/Grids";
import { MessageIcon, BellIcon, SearchIcon } from "../Icons/index";

const GridLayout = styled(Grids)`
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${({ theme }) => theme.bgBlock1};

  z-index: 99;
  .navbar--search {
    width: 70%;
    position: relative;
  }
`;
const Logo = styled.div`
  width: 6rem;
  cursor: pointer;
`;
const RightContent = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-end;
  align-items: center;

  svg {
    width: 28px;
    height: auto;
    cursor: pointer;
    &:hover {
      path {
        stroke: ${({ theme }) => theme.primary};
      }
    }
  }
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;
const LeftContent = styled(RightContent)`
  gap: 0rem;
  justify-content: space-between;
`;

export default function Navbar() {
  return (
    <GridLayout col={3}>
      <LeftContent>
        <Logo>
          <img alt="logo" src={logo} width={"100%"} height={"auto"} />
        </Logo>
      </LeftContent>
      <div className="navbar--search">
        <Input
          icon={<SearchIcon color={colors.gray} />}
          className="search--input"
          placeholder="Search ..."
        />
      </div>
      <RightContent>
        <BellIcon title="Notification" color={colors.gray} />
        <MessageIcon title="Message" color={colors.gray} />
        <Avatar />
      </RightContent>
    </GridLayout>
  );
}
