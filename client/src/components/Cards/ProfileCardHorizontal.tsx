import React from "react";
import styled from "styled-components";
import { Button, Skeleton } from "../../components/index";

interface ILayout {
  avatar?: string;
}
interface ICardHorizontal extends ILayout {
  isLoading?: boolean;
}

const ProfileCardHorizontal = ({
  avatar,
  isLoading = false,
}: ICardHorizontal) => {
  return isLoading ? (
    <Loading />
  ) : (
    <Layout avatar={avatar}>
      <div className="user">
        <div className="user--avatar"></div>
        <div className="user--info">
          <div className="user--info--name">John Doe</div>
          <div className="user--info--email">john.doe@gmail.com</div>
          <div className="user--info--meta">
            <div className="user--info--meta--item">300 Montages</div>
            <div className="user--info--meta--item">15 Followers</div>
            <div className="user--info--meta--item">70 Montages</div>
          </div>
        </div>
      </div>
      <Button size="sm" color="primary">
        Follow
      </Button>
    </Layout>
  );
};

export default ProfileCardHorizontal;
const Layout = styled.div<ILayout>`
  border-radius: 15px;
  padding: 15px 20px;

  background-color: ${(p) => p.theme.bgBlock1};

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: default;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${(p) => p.theme.bgBlock2};
  }
  .user {
    flex-grow: 1;
    display: flex;
    gap: 0 2rem;
    align-items: center;
    &--avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      flex-shrink: 0;
      background-image: url(${(p) => p.avatar});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &--info {
      display: flex;
      flex-direction: column;
      gap: 10px 0;

      &--name {
        font-size: 1.5rem;
        color: ${(p) => p.theme.white};
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease;
        &:hover {
          color: ${(p) => p.theme.primary};
        }
      }
      &--email {
        font-weight: 400;
        color: ${(p) => p.theme.lightGray};
      }
      &--meta {
        display: flex;
        align-items: center;
        gap: 0 20px;
        font-weight: 300;
        color: ${(p) => p.theme.gray};
        &--item {
        }
      }
    }
  }

  button {
    width: fit-content;
  }
`;
const Loading = () => (
  <Layout avatar={""}>
    <div className="user">
      <Skeleton
        style={{
          width: "70px",
          height: " 70px",
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      <div className="user--info">
        <div className="user--info--name">
          <Skeleton style={{ width: 150 }} />
        </div>
        <div className="user--info--email">
          <Skeleton style={{ width: 200 }} />
        </div>
        <div className="user--info--meta">
          <div className="user--info--meta--item">
            <Skeleton />
          </div>
          <div className="user--info--meta--item">
            <Skeleton />
          </div>
          <div className="user--info--meta--item">
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
    <Button size="sm" color="primary">
      Follow
    </Button>
  </Layout>
);
