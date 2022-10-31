import { gql } from "@apollo/client";
export const UPDATE_COMMON_PROFILE = gql`
  mutation Mutation($updateUserId: String!, $inputUpdate: UpdateUserInputDto!) {
    updateUser(id: $updateUserId, inputUpdate: $inputUpdate) {
      status
      message
    }
  }
`;
