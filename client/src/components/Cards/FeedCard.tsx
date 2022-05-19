import React from "react";
import styled from "styled-components";
import AvatarCircleGroup from "../Avatar/AvatarCircleGroup";
import { Avatar } from "../Avatar/index";
import { Button } from "../Buttons/index";
import {
  MoreHorizontalIcon,
  FireIcon,
  MessageIcon,
  ShareIcon,
} from "../Icons/index";
import ImageLayout from "../Images/ImageLayout";
interface IFeedCardProps {
  src?: string;
}
export default function FeedCard({ src }: IFeedCardProps): JSX.Element {
  const images = [
    "https://source.unsplash.com/random?sig=281&3d-render",
    "https://source.unsplash.com/random?sig=12&3d-render",
    "https://source.unsplash.com/random?sig=911&3d-render",
    "https://source.unsplash.com/random?sig=81&3d-render",
    "https://source.unsplash.com/random?sig=891&3d-render",
    "https://source.unsplash.com/random?sig=261&3d-render",
    "https://source.unsplash.com/random?sig=461&3d-render",
  ];
  return (
    <Layout>
      <div className="header">
        <Avatar reverse />
        <MoreHorizontalIcon />
      </div>
      <span className="card--content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod massa
        donec cursus tortor enim. Nunc, hac diam morbi augue at vulputate vitae.
      </span>
      <div className="card--img">
        <ImageLayout images={images} />
      </div>
      <div className="card--actions">
        <div className="card--actions--left">
          <LikeButton>
            <IconWithCount count={"4k"}>
              <FireIcon />
            </IconWithCount>
          </LikeButton>
          <IconWithCount count={"100"}>
            <MessageIcon />
          </IconWithCount>
        </div>
        <div className="card--actions--right">
          <AvatarCircleGroup avatars={images} />
          <span>and 300 others liked</span>
        </div>
      </div>
    </Layout>
  );
}

type TIconWithCount = {
  count: number | string;
};
type TLikeButton = {
  active?: boolean;
};
const LikeButton = styled.span<TLikeButton>`
  & svg {
    stroke-opacity: ${(p) => (p.active ? 0 : 1)};
    fill: ${(p) => (p.active ? p.theme.red : "transparent")};
  }
`;
const IconWithCount = styled.span<TIconWithCount>`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:after {
    content: "${(p) => p.count}";
    display: inline-block;
    margin-left: 5px;
  }
`;
const Layout = styled.div`
  line-height: 140%;

  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.bgBlock2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
  width: 100%;

  .header {
    padding: 1rem 1.25rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card--content {
    padding: 0 1.25rem;
  }
  .card--actions {
    padding: 0 1.25rem 1.25rem 1.25rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .button {
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 24px;
      height: 24px;
    }

    &--left {
      margin-top: 5px;
      display: flex;
      column-gap: 20px;
    }

    &--right {
      margin-top: 5px;
      display: flex;
      column-gap: 10px;
      color: ${(p) => p.theme.lightGray};
    }
  }
`;
