import COLORS from "src/constains/colors";
import { Maybe } from "src/graphql/types/graphql";
import styled from "styled-components";

export const Wrapper = styled.div`
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

export const GroupWrapperForm = styled(Wrapper)`
  gap: 20px;
`;
export const GroupWrapper = styled(Wrapper)`
  gap: 15px;
`;
export const GroupAvatar = styled.div`
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
export const Title = styled.p`
  margin: 0;
  font-weight: bold;
`;
export const SubText = styled.span`
  color: ${COLORS.gray};
`;

export const Background = styled.div<{
  src: string | Maybe<string> | undefined;
}>`
  width: 100%;
  background: url(${({ src }) => src}), ${COLORS.primary};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 150px;
  max-width: 650px;
  border-radius: 15px;
  cursor: pointer;
`;

export const Flex = styled.div`
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

  & .flex-none {
    flex: none;
  }
`;
