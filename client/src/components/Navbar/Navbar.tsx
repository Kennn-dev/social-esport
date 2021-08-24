import React from "react";
import styled from "styled-components";
import Avatar from "../../components/Avatar/Avatar";
import logo from "../../assets/logo.png";
import * as colors from "../../constains/colors";
import Input from "../Inputs/Input";
import { Grids } from "../containers/index";
import { MessageIcon, MenuIcon, BellIcon } from "../Icons/index";

const GridLayout = styled(Grids)`
  border-bottom: 1px solid ${colors.gray};
  grid-template-columns: 1fr 3fr 2fr;
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
    width: 1.25rem;
    height: auto;
    cursor: pointer;
    &:hover {
      path {
        fill: ${colors.primary};
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
const SearchInput = styled(Input)`
  font-weight: 700;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 60%;
  }
`;

export default function Navbar() {
  return (
    <GridLayout col={3}>
      <LeftContent>
        <Logo>
          <img alt="logo" src={logo} width={"100%"} height={"auto"} />
        </Logo>
        <MenuIcon color={colors.gray} />
      </LeftContent>
      <SearchInput placeholder="Search ..." />
      <RightContent>
        <BellIcon title="Notification" color={colors.gray} />
        <MessageIcon title="Message" color={colors.gray} />
        <Avatar />
      </RightContent>
    </GridLayout>
  );
}
