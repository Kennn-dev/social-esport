import React from "react";
import styled from "styled-components";
import { EyeIcon, MessageIcon, FireIcon } from "../../components/index";

interface ILayoutVideoCardHorizontal {
  src: string;
}
type Count = {
  views: number;
  like: number;
  comments: number;
};
interface IVideoCardHorizontal extends ILayoutVideoCardHorizontal {
  title: string;
  count: Count;
}
const Layout = styled.div<ILayoutVideoCardHorizontal>`
  display: flex;
  gap: 0 15px;
  padding: 15px;
  border-radius: 15px;
  background-color: ${(p) => p.theme.bgBlock1};
  transition: background-color 0.3s ease;

  cursor: pointer;
  .image {
    background-image: url(${(p) => p.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    flex-basis: 40%;
    height: inherit;
    border-radius: 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title {
      font-size: 18px;
      line-height: 130%;
      font-weight: bold;
      color: ${(p) => p.theme.white};
      transition: color 0.3s ease;
      &:hover {
        color: ${(p) => p.theme.primary};
      }
    }
    &--author {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 0 10px;
      color: ${(p) => p.theme.lightGray};
      &--avatar {
        flex-shrink: 0;
        width: 30px;
        height: 30px;
        background-image: url(${(p) => p.src});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 100%;
        overflow: hidden;
      }
    }
    &--meta {
      display: flex;
      gap: 0 20px;
      align-items: center;
      &--item {
        font-weight: 300;
        display: flex;
        gap: 0 6px;

        align-items: center;
        svg {
          width: 23px;
          height: 23px;
        }
      }
    }
  }

  &:hover {
    background-color: ${(p) => p.theme.bgBlock2};
  }
`;
const VideoCardHorizontal = ({ src, title, count }: IVideoCardHorizontal) => {
  return (
    <Layout src={src}>
      <div className="image"></div>
      <div className="content">
        <h4 className="title">{title}</h4>
        <div className="content--author">
          <div className="content--author--avatar"></div>
          <div className="content--author--name">John Doe</div>
        </div>
        <div className="content--meta">
          <div className="content--meta--item">
            {count.views} <EyeIcon />
          </div>
          <div className="content--meta--item">
            {count.like} <FireIcon />
          </div>

          <div className="content--meta--item">
            {count.comments}
            <MessageIcon />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoCardHorizontal;
