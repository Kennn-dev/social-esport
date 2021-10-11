import React from "react";
import styled from "styled-components";
import {
  Tag,
  Button,
  FireIcon,
  ShareIcon,
  Avatar,
  MoreHorizontalIcon,
} from "../../../../components/index";
import { MontageLayout } from "./Montage";

const MontageDetailLayout = styled(MontageLayout)`
  .montage--video {
    width: 60%;

    display: flex;
    flex-direction: column;
    gap: 10px;
    &--player {
    }
    &--tags {
      display: flex;
      width: 100%;
      gap: 20px;
      align-items: center;
      flex-wrap: wrap;
    }
    &--title {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.white};
    }
    &--subinfo {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .buttons-group {
        display: flex;
        width: 50%;
        font-size: 1rem;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .montage--video--info {
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    gap: 20px;
    &--author {
      display: flex;
      justify-content: space-between;

      .buttons-group {
        display: flex;
        width: 30%;
        column-gap: 1rem;
        .button-more {
          width: fit-content;

          padding: 0.75rem;
        }
      }
    }

    &--tabs {
      margin-top: 20px;
    }
  }
`;
const VideoPlayer = ({ src }: { src: string }) => {
  const Wrapper = styled.div`
    width: 100%;
    min-width: 0;
    height: 25rem;

    border-radius: 15px;

    background-image: url(${src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  return <Wrapper />;
};
type TabsItem = {
  label: string;
  value: string;
};
interface TabsProps {
  tabs: TabsItem[];
  onChange?: () => {};
}

const Tabs: React.FC<TabsProps> = ({ tabs, onChange }) => {
  const [active, setActive] = React.useState<string>(tabs[0].value);
  const Wrapper = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;

    button {
      width: fit-content;
    }
  `;
  return (
    <Wrapper>
      {tabs.map((tab: TabsItem, index: number) => (
        <Button
          onClick={() => setActive(tab.value)}
          color={active === tab.value ? "primary" : "default"}
          key={tab.value + index}
          size="sm"
        >
          {tab.label}
        </Button>
      ))}
    </Wrapper>
  );
};
export default function MontageDetail() {
  return (
    <MontageDetailLayout>
      <div className="montage--video">
        <div className="montage--video--player">
          <VideoPlayer
            src={`https://images.unsplash.com/photo-1619017120139-fb150367d4fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9sfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
          />
        </div>
        <div className="montage--video--tags">
          <Tag>League of Legends</Tag>
          <Tag>Counter Strike</Tag>
          <Tag>LOL</Tag>
        </div>
        <div className="montage--video--title">
          [Reup] League of Legends Montage Best Highlights 2021
        </div>
        <div className="montage--video--subinfo">
          <div className="views">
            <span className="bold">300</span>
            {` Views • ${"12 / 02 / 2022"}`}
          </div>
          <div className="buttons-group">
            <Button size="sm" icon={<FireIcon />}>
              30 Like
            </Button>
            <Button size="sm" icon={<ShareIcon />}>
              10 Share
            </Button>
          </div>
        </div>
        <div className="montage--video--info">
          <div className="montage--video--info--author">
            <Avatar reverse={true} />
            <div className="buttons-group">
              <Button color="primary" size="base">
                Follow
              </Button>
              <Button className="button-more" size="base">
                <MoreHorizontalIcon />{" "}
              </Button>
            </div>
          </div>
          <div className="montage--video--info--tabs">
            <Tabs
              tabs={[
                { label: "Comments", value: "0" },
                { label: "Descriptions", value: "1" },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="montage--videos"></div>
    </MontageDetailLayout>
  );
}
