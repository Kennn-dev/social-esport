import React from "react";
import styled from "styled-components";
import Picker, { IEmojiPickerProps } from "emoji-picker-react";
const Wrapper = styled.div`
  .emoji-picker-react {
    background-color: ${(p) => p.theme.bgBlock3};
    box-shadow: 0px 4px 50px 0px ${(p) => p.theme.bgBlock2};
    border: 1px solid ${(p) => p.theme.lightGray};
    .emoji-group:before {
      background-color: ${(p) => p.theme.bgBlock3};
    }
    .emoji-search {
      color: ${(p) => p.theme.white};
      background: transparent;
    }
    .emoji-categories > button {
      width: 20px !important;
      filter: invert(100%);
    }
  }
`;
interface IStyledEmojiPicker extends IEmojiPickerProps {}
export default function StyledEmojiPicker(props: IStyledEmojiPicker) {
  const { ...emojiProps } = props;
  return (
    <Wrapper>
      <Picker {...emojiProps} />
    </Wrapper>
  );
}
