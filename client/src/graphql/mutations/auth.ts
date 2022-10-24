import { gql } from "@apollo/client";

// Define mutation
export const LOGIN = gql`
  mutation Login($input: InputLoginDto!) {
    login(input: $input) {
      user {
        email
        lastName
        firstName
        avatar
        backgroundImage
      }
      accessToken
      tokenType
    }
  }
`;
