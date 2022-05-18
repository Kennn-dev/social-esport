import React, {
  FormEventHandler,
  LegacyRef,
  useCallback,
  useRef,
  useState,
} from "react";
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
import Picker, { IEmojiData } from "emoji-picker-react";
import IconWithTooltip from "./IconWithTooltip";
import useDebounce from "../../hooks/useDebounce";
import ImageSelectList from "../ImageSelectList";
import StyledEmojiPicker from "../EmojiPicker";
import ButtonAddImage from "../Buttons/ButtonAddImage";
interface IPostModal extends Props {
  avatar: string;
  onClose: () => void;
}
const PostModal = ({ avatar, onClose = () => {}, ...props }: IPostModal) => {
  const [content, setContent] = React.useState<string>("");
  const [srcList, setSrcList] = React.useState<string[]>([]);

  const onEmojiClick = (event: any, emojiObject: IEmojiData) => {
    setContent(content.concat(emojiObject.emoji));
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const submit = () => {
    console.log(content);
  };
  const handleImageSelectChange = (fileList: string[]) => {
    setSrcList((p) => [...p, ...fileList]);
  };
  const handleClose = () => {
    setContent("");
    setSrcList([]);
    onClose();
  };
  return (
    <CustomModal {...props}>
      <ModalLayout avatar={avatar}>
        <div className="title">
          Create Post
          <CancelIcon onClick={handleClose} title="cancel" />
        </div>
        <div className="modal">
          <div className="modal--form">
            <div className="modal--form--body">
              <TextArea
                customStyle="plain"
                value={content}
                onChange={handleChangeInput}
                placeholder="What do you think ?"
                rows={7}
                autoFocus
              />
              <ImageSelectList
                src={srcList}
                onChange={handleImageSelectChange}
              />
            </div>
            <div className="modal--form--footer">
              <div className="modal--form--footer--items">
                <ButtonAddImage
                  buttonType="icon"
                  onChange={handleImageSelectChange}
                />
                <IconWithTooltip icon={<EmojiIcon title="Emoji" />}>
                  <StyledEmojiPicker onEmojiClick={onEmojiClick} />
                </IconWithTooltip>
                {/* <StickerIcon title="Sticker" /> */}
              </div>
              <Button onClick={submit} color="primary">
                Share Post
              </Button>
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

  /* width: 100vh; */
  /* max-width: 580px; */
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
      width: 60vh;
      display: flex;

      flex-direction: column;
      gap: 15px 0;

      &--body {
        textarea {
          width: 100%;
          max-height: 300px;
          margin-bottom: 20px;
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
