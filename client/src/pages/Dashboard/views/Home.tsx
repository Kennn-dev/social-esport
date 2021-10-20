import React from "react";
import styled from "styled-components";
// import * as colors from "../../../constains/colors";
import { AvatarCircle } from "../../../components/Avatar/index";
import {
  Input,
  EmojiIcon,
  ImageIcon,
  CancelIcon,
  StickerIcon,
  FeedCard,
  Button,
  CustomModal,
} from "../../../components/index";
import { Props } from "react-modal";
import RightSideBar from "../../../components/Sidebar/RightSideBar";

interface IPostModal extends Props {
  avatar: string;
  onClose: () => void;
}

const PostModal = ({ avatar, onClose = () => {}, ...props }: IPostModal) => {
  // const handleOnClose = () => {
  //   onClose();
  // };
  return (
    <CustomModal {...props}>
      <ModalLayout avatar={avatar}>
        <div className="title">
          Create Post
          <CancelIcon onClick={onClose} title="cancel" />
        </div>
        <div className="modal">
          <div className="modal--avatar"></div>
          <div className="modal--form">
            <div className="modal--form--body">
              <Input />
            </div>
            <div className="modal--form--footer">
              <div className="modal--form--footer--items">
                <ImageIcon title="Image" />
                <StickerIcon title="Sticker" />
                <EmojiIcon title="Emoji" />
              </div>
              <Button color="primary">Share Post</Button>
            </div>
          </div>
        </div>
      </ModalLayout>
    </CustomModal>
  );
};

export default function Home(): JSX.Element {
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(true);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="home--content">
        <HomeLayout>
          <ChildLayout>
            <div className="title">Let's create something</div>
            <InputWrapper>
              <AvatarCircle className="avatar" width={"2rem"} height={"2rem"}>
                <img
                  src="https://source.unsplash.com/random?gid=120"
                  alt="avatar"
                  width="100%"
                  height="auto"
                />
              </AvatarCircle>
              <Input
                className="input"
                onClick={() => {
                  setIsOpen((s) => !s);
                }}
                placeholder="How was your game today ?"
              />
              <ImageIcon />
            </InputWrapper>
          </ChildLayout>
          <ChildLayout>
            <div className="child--content">
              <span className="child--title">Sort by</span>
              <TabsList>
                <Button color={"primary"}>Newfeed</Button>
                <Button>Following</Button>
                <Button>Lastest</Button>
              </TabsList>
            </div>
          </ChildLayout>
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </HomeLayout>
      </div>
      <PostModal
        avatar={"https://source.unsplash.com/random?3d-render"}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onClose={closeModal}
      />
      <div className="home--rightbar">
        <RightSideBar />
      </div>
    </>
  );
}
const ModalLayout = styled.div<{ avatar: string }>`
  padding: 20px;
  padding-top: 10px;
  margin-right: 120px;
  margin-bottom: 200px;

  width: 100vh;
  max-width: 580px;
  border-radius: 15px;
  background-color: ${(p) => p.theme.bgBlock1};
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(p) => p.theme.lightGray};
    svg {
      cursor: pointer;
      width: 50px;
      height: 50px;
      transition: transform 0.5s ease;
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
  .modal {
    margin-top: 5px;
    display: flex;

    gap: 0 20px;

    &--avatar {
      flex-shrink: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;

      background-image: url(${(p) => p.avatar});
      background-size: cover;
      background-repeat: no-repeat;
    }
    &--form {
      width: 100%;
      display: flex;

      flex-direction: column;
      gap: 15px 0;

      &--body {
        input {
          width: 100%;
        }
      }
      &--footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &--items {
          display: flex;
          gap: 15px;
          align-items: center;
        }
        button {
          width: fit-content;
        }
      }
    }
  }
`;
const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  flex-shrink: 0;

  margin: 0 auto;
  padding: 2rem;

  .title {
    color: ${({ theme }) => theme.white};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
const ChildLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  .child--content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .child--title {
    color: ${({ theme }) => theme.gray};
    font-weight: 700;
  }
`;
const InputWrapper = styled.div`
  display: flex;
  padding: 1.5rem;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  gap: 20px;

  background: ${({ theme }) => theme.bgBlock2};
  border-radius: 0.75rem;
  .input {
    flex-grow: 1;
  }
  .avatar {
    flex: none;
  }
`;
const TabsList = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  width: fit-content;
`;
