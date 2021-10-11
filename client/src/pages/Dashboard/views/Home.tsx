import React from "react";
import styled from "styled-components";
import { AvatarCircle } from "../../../components/Avatar/index";
import Input from "../../../components/Inputs/Input";
import { Button } from "../../../components/Buttons/index";
import { FeedCard } from "../../../components/Cards/index";
import RightSideBar from "../../../components/Sidebar/RightSideBar";

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex-shrink: 0;

  margin: 0 auto;
  padding: 2rem;

  .title {
    color: ${({ theme }) => theme.white};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
const ChildLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  .child--content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .child--title {
    color: ${({ theme }) => theme.gray};
    font-weight: 700;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;

  background: ${({ theme }) => theme.bgBlock2};
  border-radius: 0.75rem;

  .avatar {
    flex: none;
  }
`;
const TabsList = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: fit-content;
`;

export default function Home(): JSX.Element {
  return (
    <>
      <div className="home--content">
        <HomeLayout>
          <ChildLayout>
            <div className="title">Let's create something</div>
            <InputWrapper>
              <AvatarCircle className="avatar" width={"2rem"} height={"2rem"}>
                <img
                  src="https://source.unsplash.com/random?gid=120"
                  alt="avatar"
                  width="100%"
                  height="auto"
                />
              </AvatarCircle>
              <Input placeholder="How was your game today ?" />
            </InputWrapper>
          </ChildLayout>
          <ChildLayout>
            <div className="child--content">
              <span className="child--title">Sort by</span>
              <TabsList>
                <Button color={"primary"}>Newfeed</Button>
                <Button>Following</Button>
                <Button>Lastest</Button>
              </TabsList>
            </div>
          </ChildLayout>
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </HomeLayout>
      </div>

      <div className="home--rightbar">
        <RightSideBar />
      </div>
    </>
  );
}
