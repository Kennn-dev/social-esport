import React from "react";
import Layout from "../../../components/containers/Layout";
import styled from "styled-components";
import * as colors from "../../../constains/colors";
import { AvatarCircle } from "../../../components/Avatar/index";
import Input from "../../../components/Inputs/Input";
import { Button } from "../../../components/Buttons/index";
import { FeedCard } from "../../../components/Cards/index";
import RightSideBar from "../../../components/Sidebar/RightSideBar";
const HomeWrapper = styled(Layout)`
  width: 60%;
  .home--content {
    flex-grow: 1;
  }
  .home--rightbar {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    flex-shrink: 0;
    width: 35%;
  }
`;
const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex-shrink: 0;

  margin: 0 auto;
  padding: 2rem;

  .title {
    color: ${colors.white};
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
    color: ${colors.gray};
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

  background: ${colors.bgBlock2};
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
      <HomeWrapper rightContent>
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
                <Input
                  css={{ borderRadius: "0.75rem" }}
                  placeholder="How was your game today ?"
                />
              </InputWrapper>
            </ChildLayout>
            <ChildLayout>
              <div className="child--content">
                <span className="child--title">Sort by</span>
                <TabsList>
                  <Button isActive>Newfeed</Button>
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
      </HomeWrapper>
    </>
  );
}
