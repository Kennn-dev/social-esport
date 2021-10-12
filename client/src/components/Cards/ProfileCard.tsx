import React from "react";
import styled from "styled-components";

interface IProfileCardLayoutProps {
  src: string;
}
interface IProfileCardProps extends IProfileCardLayoutProps {}

const ProfileCard = ({ src }: IProfileCardProps) => {
  return (
    <Layout src={src}>
      <div className="profile--avatar"></div>
      <div className="profile--content">
        <div className="profile--content--name">Lily Bailey</div>
        <div className="profile--content--email">lilybailey@email.com</div>
      </div>
      <div className="profile--actions">
        <div className="profile--actions--follow">Follow</div>
        <div className="profile--actions--view">View</div>
      </div>
    </Layout>
  );
};

const Layout = styled.div<IProfileCardLayoutProps>`
  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 20px 25px;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.bgBlock1};

  transition: all ease 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.bgBlock2};
    .profile--actions--view {
      background-color: ${({ theme }) => theme.primary};
    }
  }
  .profile--avatar {
    background-image: url(${({ src }) => src});
    background-position: center;
    background-repeat: no-repeat;

    width: 60px;
    height: 60px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
  }
  .profile--content {
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    &--name {
      font-size: 18px;
      font-weight: bold;
      color: ${({ theme }) => theme.white};
    }
    &--email {
      color: ${({ theme }) => theme.gray};
    }
  }
  .profile--actions {
    display: flex;
    flex-direction: column;

    row-gap: 10px;
    width: 100%;
    text-align: center;
    &--follow {
      width: 100%;
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
    }
    &--view {
      display: block;
      color: ${({ theme }) => theme.white};
      padding: 15px 20px;
      border-radius: 8px;
      font-weight: bold;

      transition: all ease 0.3s;
    }
  }
`;

export default ProfileCard;
