import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import logo from "../../assets/logo.png";
import * as colors from "../../constains/colors";
import Input from "../Inputs/Input";
import Grids from "../containers/Grids";
import {
  CreatePostIcon,
  CreateVideoIcon,
  AddIcon,
  MessageIcon,
  BellIcon,
  SearchIcon,
} from "../Icons/index";

export default function Navbar() {
  const [query, setQuery] = React.useState<string>("");
  const [isCreateOpen, setCreateOpen] = React.useState<boolean>(false);
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
  let createRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handler = (e: any) => {
      if (typeof createRef?.current === "object") {
        if (!createRef?.current?.contains(e.target)) {
          setCreateOpen(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [createRef]);
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
        <div className="icon" ref={createRef}>
          <DropdownCreate active={isCreateOpen}>
            <div className="parent">
              <AddIcon
                onClick={() => {
                  setCreateOpen((s) => !s);
                }}
                className="message"
                title="Create"
              />
            </div>
            <div
              className="child"
              onBlur={() => {
                console.log("blur");
              }}
            >
              <div className="child--item">
                <CreatePostIcon /> Create Post
              </div>
              <div className="child--item">
                <CreateVideoIcon /> Create Montage
              </div>
            </div>
          </DropdownCreate>
        </div>
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

const DropdownLayout = styled.div<{ active: boolean }>`
  position: relative;
  .parent {
  }
  .child {
    opacity: ${(p) => (p.active ? 1 : 0)};
    visibility: ${(p) => (p.active ? "visible" : "hidden")};

    width: fit-content;
    padding: 20px 0;
    border-radius: 15px;
    background-color: ${(p) => p.theme.bgBlock2};
    position: absolute;
    top: calc(100% + 20px);
    right: -100%;
    transition: all 0.4s ease;
    &--item {
      display: flex;
      align-items: center;
      visibility: inherit;
      cursor: pointer;
      width: 200px;
      color: ${(p) => p.theme.white};
      padding: 20px 25px;
      background-color: ${(p) => p.theme.bgBlock2};
      transition: all 0.3s ease;

      svg {
        margin-right: 10px;
      }
      &:hover {
        background-color: ${(p) => p.theme.bgBlock4};
      }
    }
  }
`;
const DropdownCreate = styled(DropdownLayout)`
  .parent {
    .child {
      &--item {
        display: flex;
        align-items: center;
        gap: 0 10px;
        svg {
          width: 24px;
          height: 24px;
          path {
            stroke: ${(p) => p.theme.white};
          }
        }
      }
    }
  }
`;
const GridLayout = styled(Grids)`
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: ${({ theme }) => theme.bgBlock1};

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
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
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
    gap: 20px;
  }
`;
const LeftContent = styled(RightContent)`
  gap: 0rem;
  justify-content: space-between;
`;
