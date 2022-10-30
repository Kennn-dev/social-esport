import React, { useRef } from "react";
import { Button, Input } from "src/components";
import AvatarThumb from "src/components/Avatar/AvatarThumb";
import COLORS from "src/constains/colors";
import { useAppStore } from "src/store";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px;
  width: 100%;
  gap: 30px;

  .save {
    width: fit-content;
  }
`;

const GroupWrapperForm = styled(Wrapper)`
  gap: 20px;
`;
const GroupWrapper = styled(Wrapper)`
  gap: 15px;
`;
const GroupAvatar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 30px;
  & > .avatar {
    cursor: pointer;
  }
  & > .btn-edit {
    flex: none;
    width: 50%;
    max-width: 150px;

    & input {
      display: none;
    }
  }
`;
const Title = styled.p`
  margin: 0;
  font-weight: bold;
`;
const SubText = styled.span`
  color: ${COLORS.gray};
`;

const Background = styled.div<{ src: string }>`
  width: 100%;
  background: url(${({ src }) => src}), #c4c4c4;
  height: 150px;
  border-radius: 15px;
  cursor: pointer;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 15px;
  }
`;

export default function UserProfile() {
  const uploadAvatarRef = useRef<HTMLInputElement>(null);
  const uploadBackgroundRef = useRef<HTMLInputElement>(null);
  const user = useAppStore((s) => s.auth.user);

  const handleUploadAvatar = () => {
    uploadAvatarRef.current?.click();
  };

  const handleUploadBackground = () => {
    uploadBackgroundRef.current?.click();
  };

  return (
    <Wrapper>
      <Title>Avatar</Title>
      <GroupWrapper>
        <GroupAvatar>
          <div className="avatar" onClick={handleUploadAvatar}>
            <AvatarThumb height={140} width={140} user={user} />
          </div>
          <div className="btn-edit">
            <Button color="primary">Remove Avatar</Button>
            <input ref={uploadAvatarRef} type="file" />
          </div>
          <SubText>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</SubText>
        </GroupAvatar>
      </GroupWrapper>
      <GroupWrapper>
        <Title>Background Cover</Title>
        <SubText>
          File format: JPEG, PNG, GIF (recommended 1200x480, max 10MB)
        </SubText>
        <Background
          onClick={handleUploadBackground}
          src={`https://images.unsplash.com/photo-1633907284646-7abf4a195875?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80`}
        />
        <input
          style={{ display: "none" }}
          ref={uploadBackgroundRef}
          type="file"
        />
      </GroupWrapper>
      <GroupWrapperForm>
        <Title>Full name</Title>
        <Input style={{ width: "100%" }} />
        <Flex>
          <div>
            <Title>Email</Title>
            <Input type="email" style={{ width: "100%" }} />
          </div>

          <div>
            <Title>Phone Number</Title>
            <Input type="number" style={{ width: "100%" }} />
          </div>
        </Flex>
        <Title>Address</Title>
        <Input style={{ width: "100%" }} />
      </GroupWrapperForm>

      <div className="save">
        <Button color="primary">Save</Button>
      </div>
    </Wrapper>
  );
}
