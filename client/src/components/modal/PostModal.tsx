import React from "react";
import { Props } from "react-modal";
import styled from "styled-components";
import {
  Button,
  CancelIcon,
  EmojiIcon,
  ImageIcon,
  StickerIcon,
  TextArea,
} from "../../components/index";
import CustomModal from "../CustomModal";
// import * as colors from "../../constains/colors";
interface IPostModal extends Props {
  avatar: string;
  onClose: () => void;
}
const PostModal = ({ avatar, onClose = () => {}, ...props }: IPostModal) => {
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
              <TextArea placeholder="What do you think ?" rows={7} autoFocus />
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

export default PostModal;
const ModalLayout = styled.div<{ avatar: string }>`
  padding: 20px;
  padding-top: 10px;
  margin-right: 120px;
  margin-bottom: 100px;

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
        textarea {
          width: 100%;
          max-height: 300px;
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
