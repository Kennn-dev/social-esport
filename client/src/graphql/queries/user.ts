import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
  query Query($getUserByIdId: String!) {
    getUserById(id: $getUserByIdId) {
      _id
      firstName
      lastName
      email
      role
      avatar
      backgroundImage
      follower {
        total
        listUsers {
          _id
          lastName
          firstName
          avatar
          email
        }
      }
      following {
        total
        listUsers {
          _id
          lastName
          firstName
          email
          avatar
        }
      }
    }
  }
`;
export const GET_USER_PROFILE = gql`
  query Query($getUserByIdId: String!) {
    getUserById(id: $getUserByIdId) {
      _id
      lastName
      firstName
      email
      role
      avatar
      backgroundImage
      address
      phoneNumber
    }
  }
`;
