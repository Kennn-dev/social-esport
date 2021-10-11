import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AvatarCircle } from "../Avatar/index";
import { MoreVerticalIcon } from "../Icons/index";
import Tag from "../Tags/Tag";

interface VideoLayoutProps {
  src: string;
}

interface VideoCardProps extends VideoLayoutProps {
  title: string;
  author: string;
  tags?: string[];
}

export default function VideoCard({
  title,
  author,
  src,
  tags,
}: VideoCardProps) {
  return (
    <Layout>
      <VideoLayout src={src} />
      <div className="content">
        <div className="avatar">
          <AvatarCircle height="40px" width="40px">
            <img
              src="https://source.unsplash.com/random?sig=888"
              height="auto"
              width="100%"
              alt="avatar"
            />
          </AvatarCircle>
        </div>
        <Link to="/dashboard/montage/123">
          <div className="text">
            <div className="main-text">{title}</div>
            <div className="creator-text">{author}</div>
            <div className="tags">
              {tags &&
                tags.length > 0 &&
                tags.map((value) => <Tag key={value}>{value}</Tag>)}
            </div>
          </div>
        </Link>
        <div className="icon">
          <MoreVerticalIcon />
        </div>
      </div>
    </Layout>
  );
}
const VideoLayout = styled.div<VideoLayoutProps>`
  flex-shrink: 0;
  height: 10rem;
  width: 100%;
  max-height: 800px;
  max-width: 900px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Layout = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid transparent;
  border-radius: 8px;

  cursor: pointer;

  transition: all ease-in-out 0.2s;
  height: fit-content;
  background-color: ${({ theme }) => theme.bgBlock2};

  a {
    text-decoration: none;
  }
  .content {
    margin-top: 5px;
    padding: 0.75rem 1rem;
    display: flex;
    flex-wrap: nowrap;
    color: ${({ theme }) => theme.gray};
    column-gap: 1rem;

    .avatar {
      margin-top: 0.5rem;
    }
    .creator-text {
      display: inline;
      &:hover {
        color: ${({ theme }) => theme.white};
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      gap: 8px;
      .main-text {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: ${({ theme }) => theme.white};
        font-weight: 700;

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .icon {
      margin-left: auto;
      svg {
        width: auto;
        height: 1.25rem;
        path {
          fill: ${({ theme }) => theme.gray};
        }
        &:hover {
          path {
            fill: ${({ theme }) => theme.white};
          }
        }
      }
    }
  }
`;
