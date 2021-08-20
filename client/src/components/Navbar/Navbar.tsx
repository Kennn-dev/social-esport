import React from "react";
import styled from "styled-components";
import Avatar from "../../components/Avatar/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import * as colors from "../../constains/colors";
import Input from "../Inputs/Input";
import { Grids } from "../containers/index";

const Logo = styled.div`
  width: 100px;
`;
const RightContent = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: flex-end;
  align-items: center;
  svg {
    cursor: pointer;
    &:hover {
      color: ${colors.primary};
    }
  }
`;
const LeftContent = styled(RightContent)`
  gap: 0rem;
  justify-content: space-between;
`;

const SearchInput = styled(Input)`
  font-weight: 700;
`;

export default function Navbar() {
  return (
    <>
      <Grids col={3}>
        <LeftContent>
          <Logo>
            <img alt="logo" src={logo} width={"100%"} height={"auto"} />
          </Logo>
          <FontAwesomeIcon
            size="lg"
            color={colors.gray}
            icon={["fas", "bars"]}
          />
        </LeftContent>
        <SearchInput placeholder="Search ..." />
        <RightContent>
          <FontAwesomeIcon
            size="lg"
            color={colors.gray}
            icon={["far", "bell"]}
          />
          <FontAwesomeIcon
            size="lg"
            color={colors.gray}
            icon={["far", "comment-alt"]}
          />
          <Avatar />
        </RightContent>
      </Grids>
    </>
  );
}
