import React from "react";
import styled from "styled-components";
import * as colors from "../../constains/colors";
import { Avatar } from "../Avatar/index";
import { Button } from "../Buttons/index";
import {
  MoreHorizontalIcon,
  FireIcon,
  MessageIcon,
  ShareIcon,
} from "../Icons/index";
const Layout = styled.div`
  line-height: 140%;

  color: ${colors.white};
  background: ${colors.bgBlock2};
  border-radius: 1rem;
  padding: 1rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  width: 80%;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content {
  }
  .actions {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .button {
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 1rem;
      height: auto;
    }
  }
`;

export default function FeedCard(): JSX.Element {
  return (
    <Layout>
      <div className="header">
        <Avatar reverse />
        <MoreHorizontalIcon />
      </div>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod massa
        donec cursus tortor enim. Nunc, hac diam morbi augue at vulputate vitae.
      </span>
      <div className="content">
        <img
          src={"https://source.unsplash.com/random"}
          alt="this is content img"
          width="100%"
          height="auto"
        />
      </div>
      <div className="actions">
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
