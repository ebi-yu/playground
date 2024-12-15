import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await startStandaloneServer(server, {
    listen: { port: 4000 },
  }).then((vo) => {
    console.log(`🚀  Server ready at ${vo.url}`);
  });
}

startServer();
