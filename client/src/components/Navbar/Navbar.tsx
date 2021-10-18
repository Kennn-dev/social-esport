import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import logo from "../../assets/logo.png";
import * as colors from "../../constains/colors";
import Input from "../Inputs/Input";
import Grids from "../containers/Grids";
import { MessageIcon, BellIcon, SearchIcon } from "../Icons/index";

export default function Navbar() {
  const [query, setQuery] = React.useState<string>("");
  const history = useHistory();
  const handleSearchChange = (e: any) => {
    setQuery(e?.target?.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      history.push({
        pathname: "/dashboard/search",

        search: `?query=${query}`,
      });
    }
  };
  return (
    <GridLayout col={3}>
      <LeftContent>
        <Logo>
          <img alt="logo" src={logo} width={"100%"} height={"auto"} />
        </Logo>
      </LeftContent>
      <div className="navbar--search">
        <Input
          value={query}
          icon={<SearchIcon color={colors.lightGray} />}
          className="search--input"
          placeholder="Search ..."
          onKeyDown={handleKeyPress}
          onChange={handleSearchChange}
        />
      </div>
      <RightContent>
        <div className="icon">
          <BellIcon className="bell" title="Notification" />
        </div>
        <div className="icon">
          <MessageIcon className="message" title="Message" />
        </div>
        <Avatar />
      </RightContent>
    </GridLayout>
  );
}
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

  .icon {
    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(p) => p.theme.bgBlock1};

    transition: all 0.3s ease;
    &:hover {
      background-color: ${(p) => p.theme.bgBlock3};
      .message {
        path {
          stroke: ${(p) => p.theme.primary};
        }
      }
      .bell {
        path {
          fill: ${(p) => p.theme.primary};
        }
      }
    }
  }
  svg {
    width: 24px;
    height: 24px;

    cursor: pointer;
  }
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;
const LeftContent = styled(RightContent)`
  gap: 0rem;
  justify-content: space-between;
`;
