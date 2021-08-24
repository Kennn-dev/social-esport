import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
import { AvatarCircle } from "../Avatar/index";
import { MoreVerticalIcon } from "../Icons/index";
import Tag from "../Tags/Tag";
interface VideoCardProps {
  src: string;
  title: string;
  author: string;
  tags?: string[];
}
const VideoLayout = styled.div`
  width: 100%;
`;
const Layout = styled.div`
  border: 1px solid transparent;
  border-radius: 0.75rem;
  overflow: hidden;

  cursor: pointer;

  transition: all ease-in-out 0.2s;

  .content {
    padding: 0.5rem;
    display: flex;
    flex-wrap: nowrap;
    color: ${colors.gray};
    gap: 0.5rem;

    .avatar {
    }
    .creator-text {
      display: inline;
      &:hover {
        color: ${colors.white};
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      .main-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: ${colors.white};
        font-weight: 700;

        &:hover {
          color: ${colors.primary};
        }
      }
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .icon {
      svg {
        width: auto;
        height: 1.25rem;
        path {
          fill: ${colors.gray};
        }
        &:hover {
          path {
            fill: ${colors.white};
          }
        }
      }
    }
  }
`;
export default function VideoCard({
  title,
  author,
  src,
  tags,
}: VideoCardProps): JSX.Element {
  return (
    <Layout>
      <VideoLayout>
        <iframe
          title="gp montage"
          width="100%"
          height="auto"
          src={src}
          frameBorder="0"
        ></iframe>
      </VideoLayout>
      <div className="content">
        <div className="avatar">
          <AvatarCircle height="2rem" width="2rem">
            <img
              src="https://source.unsplash.com/random?sig=888"
              height="auto"
              width="100%"
              alt="avatar"
            />
          </AvatarCircle>
        </div>

        <div className="text">
          <div className="main-text">{title}</div>
          <div className="creator-text">{author}</div>
          <div className="tags">
            {tags && tags.length > 0 && tags.map((value) => <Tag>{value}</Tag>)}
          </div>
        </div>
        <div className="icon">
          <MoreVerticalIcon />
        </div>
      </div>
    </Layout>
  );
}
