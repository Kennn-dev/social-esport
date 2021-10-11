import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
import TitleWithButton from "../common/TitleWithButton";
import { RightIcon } from "../Icons/index";
import { VideoCard } from "../Cards/index";
const Layout = styled.div`
  height: 100%;
  color: ${colors.lightGray};
  border-left: 1px solid ${colors.gray};
  padding: 1rem 2rem;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  gap: 3rem;
  overflow-y: auto;
`;
const ChildLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ChildContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
`;

export default function RightSideBar() {
  return (
    <Layout>
      <ChildLayout>
        <TitleWithButton>
          <span>Friends Request</span>
          <RightIcon />
        </TitleWithButton>
      </ChildLayout>
      <ChildLayout>
        <TitleWithButton>
          <span>You may like</span>
          <RightIcon />
        </TitleWithButton>
        <ChildContentLayout>
          <VideoCard
            title="I Tried My Signature Buffed Gangplank Build... It's Not Balanced!"
            author="Ken"
            src={`https://source.unsplash.com/random?sig=888`}
            tags={["League of Legends", "Gangplank"]}
          />
          <VideoCard
            title={`OYO VOLIBEAR MONTAGE - "KOREA VOLIBEAR MAIN" 2021 | LOL HYPER`}
            author="OYO"
            src={`https://source.unsplash.com/random?sig=82`}
            tags={["League of Legends", "Volibear"]}
          />
        </ChildContentLayout>
      </ChildLayout>
    </Layout>
  );
}
