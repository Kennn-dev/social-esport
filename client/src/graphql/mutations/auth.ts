import { gql } from "@apollo/client";

// Define mutation
export const LOGIN = gql`
  mutation Login($input: InputLoginDto!) {
    login(input: $input) {
      user {
        _id
        email
        lastName
        firstName
        avatar
        backgroundImage
        address
        phoneNumber
      }
      accessToken
      tokenType
    }
  }
`;

// Define mutation
export const REGISTER = gql`
  mutation Mutation($inputCreate: InputCreateUserDto!) {
    createUser(inputCreate: $inputCreate) {
      status
      message
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation Mutation($input: ChangePasswordInputDto!) {
    changePassword(input: $input) {
      status
      message
    }
  }
`;
