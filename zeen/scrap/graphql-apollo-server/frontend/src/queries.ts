import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

export const CREATE_USERS = gql`
  mutation Mutation($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
    }
  }
`;
