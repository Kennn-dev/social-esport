import React from "react";
import styled from "styled-components";
import { FireIcon, MessageIcon, ShareIcon } from "../index";
interface IPostCardHorizontalLayoutProps {
  image: string;
}
interface IPostCardHorizontalProps extends IPostCardHorizontalLayoutProps {}
const Layout = styled.div<IPostCardHorizontalLayoutProps>`
  height: 100%;
  border-radius: 15px;
  background-color: ${(p) => p.theme.bgBlock1};

  &:hover {
    background-color: ${(p) => p.theme.bgBlock2};
  }
  .post {
    display: flex;
    gap: 0 20px;
    height: 100%;
    justify-content: space-between;
    padding: 15px 20px;
    &--left {
      flex-grow: 1;
      &--author {
        color: ${(p) => p.theme.lightGray};
        display: flex;
        align-items: center;

        &--avatar {
          margin-right: 10px;
          background-image: url(${(p) => p.image});
          background-size: cover;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          flex-shrink: 0;
          overflow: hidden;
        }
      }
      &--content {
        margin-top: 10px;
        font-weight: 300;
        line-height: 130%;
        color: ${(p) => p.theme.white};
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }
    &--right {
      flex-shrink: 0;
      margin-left: auto;
      height: 150px;

      width: 25%;
      background-image: url(${(p) => p.image});
      background-size: cover;
      background-position: top;
      background-repeat: no-repeat;
      border-radius: 15px;
    }
  }
  .line {
    background-color: ${(p) => p.theme.gray};
    height: 1px;
    width: 100%;
  }
  /* line here--- */
  .meta {
    padding: 15px 20px;
    font-weight: 300;
    display: flex;
    justify-content: space-between;
    &--list {
      color: ${(p) => p.theme.lightGray};
      display: flex;
      gap: 0 20px;
      align-items: center;
      &--item {
        display: flex;
        align-items: center;
        svg {
          margin-left: 10px;
        }
      }
    }
    &--time {
      color: ${(p) => p.theme.gray};
    }
  }
`;
const PostCardHorizontal = ({ image }: IPostCardHorizontalProps) => {
  return (
    <Layout image={image}>
      <div className="post">
        <div className="post--left">
          <div className="post--left--author">
            <div className="post--left--author--avatar"></div>
            John Doe
          </div>
          <div className="post--left--content">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
            aperiam voluptatibus voluptas deserunt doloremque aliquam nostrum
            quas minus magni optio.
          </div>
        </div>
        <div className="post--right"></div>
      </div>

      <div className="line"></div>

      <div className="meta">
        <div className="meta--list">
          <div className="meta--list--item">
            300 <FireIcon />
          </div>
          <div className="meta--list--item">
            100 <MessageIcon />
          </div>
          <div className="meta--list--item">
            35 <ShareIcon />
          </div>
        </div>
        <div className="meta--time">3 weeks ago</div>
      </div>
    </Layout>
  );
};

export default PostCardHorizontal;
