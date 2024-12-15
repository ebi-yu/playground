import { PrismaClient } from "@prisma/client";
import { randomInt } from "crypto";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    helloUser: async (_parent: any, args: { id: string }) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${args.id}`
      );
      return response.json();
    },
    users: async (_parent: any, args: { id: string }) => {
      return prisma.user.findMany();
    },
    user: async (_parent: any, args: { name: string }) => {
      return prisma.user.findFirst({
        where: {
          name: args.name,
        },
      });
    },
  },
  Mutation: {
    createUser: (_parent: any, args: { name: string; email: string }) => {
      return prisma.user.upsert({
        where: {
          id: randomInt(10000),
        },
        update: {
          ...args,
        },
        create: {
          ...args,
        },
      });
    },
  },
  User: {
    myPosts: async (parent: any) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data: any[] = await response.json();
      return data.filter((post) => post.userId == parent.id);
    },
  },
};
