import React from "react";
import styled from "styled-components";
import { Avatar } from "../Avatar/index";
import { Button } from "../Buttons/index";
import {
  MoreHorizontalIcon,
  FireIcon,
  MessageIcon,
  ShareIcon,
} from "../Icons/index";
interface IFeedCardProps {
  src?: string;
}
export default function FeedCard({ src }: IFeedCardProps): JSX.Element {
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
        <img
          src={src || "https://source.unsplash.com/random"}
          alt="this is content img"
          width="100%"
          height="auto"
        />
      </div>
      <div className="card--actions">
        <Button className="button" icon={<FireIcon />}>
          5
        </Button>
        <Button className="button" icon={<MessageIcon />}>
          4
        </Button>
        <Button className="button" icon={<ShareIcon />}>
          5
        </Button>
      </div>
    </Layout>
  );
}
const Layout = styled.div`
  line-height: 140%;

  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.bgBlock2};
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
  width: 80%;

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
  }
`;
