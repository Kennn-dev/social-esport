import React from "react";
import styled from "styled-components";
import { AvatarCircle } from ".";

type Props = {
  avatars: string[];
};
const Wrapper = styled.div`
  display: flex;
  column-gap: 3px;
  flex-wrap: wrap;
  align-items: center;
`;
export default function AvatarCircleGroup(props: Props) {
  const { avatars } = props;

  return (
    <Wrapper>
      {avatars.slice(0, 3).map((a, i) => (
        <AvatarCircle key={i} width="20px" height="20px">
          <img src={a} height={"100%"} width={"100%"} />
        </AvatarCircle>
      ))}
    </Wrapper>
  );
}
