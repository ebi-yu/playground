import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Post {
    id: ID!
    title: String!
    body: String!
    userId: ID!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    myPosts: [Post]
  }

  type Query {
    helloUser(name: String!): User
    users: [User]
    user(name: String!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;
