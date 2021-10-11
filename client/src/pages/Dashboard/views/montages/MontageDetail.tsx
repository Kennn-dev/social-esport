import React from "react";
import styled from "styled-components";
import {
  Tag,
  Button,
  ShareIcon,
  FireIcon,
  Avatar,
  MoreHorizontalIcon,
  Tabs,
  VideoCard,
  CommentCard,
} from "../../../../components/index";
import { MontageLayout } from "./Montage";

const MontageDetailLayout = styled(MontageLayout)`
  display: flex;
  flex-direction: row;
  .montage--video {
    /* width: 60%; */
    flex: 1;
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
    &--info {
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
  .montage--video--list {
    flex-shrink: 0;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-left: auto;
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
              onChange={(vl) => {
                console.log(vl);
              }}
              tabs={[
                { label: "Comments", value: "0" },
                { label: "Descriptions", value: "1" },
              ]}
            />
          </div>
        </div>
        <div className="montage--video--comments">
          <CommentCard
            src={`https://images.unsplash.com/photo-1548067459-3a655f26f70d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGxvbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`}
          />
        </div>
      </div>
      <div className="montage--video--list">
        {[...Array(8).keys()].map((i) => (
          <VideoCard
            key={i}
            title="My Related Video Card Title"
            author={"Ken"}
            src={`https://source.unsplash.com/random?sig=88${i}`}
            tags={["Category 1", "Category 2"]}
          />
        ))}
      </div>
    </MontageDetailLayout>
  );
}
