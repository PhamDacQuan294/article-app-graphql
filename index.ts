import express, { Express } from "express";
import dotenv from "dotenv";
import * as database from "./config/database";
import { ApolloServer } from "apollo-server-express";

import { resolvers } from "./resolvers/index.resolver";
import { typeDefs } from "./typeDefs/index.typeDefs";
import { requireAuth } from "./middlewares/auth.middleware";

const startServer = async () => {
  const app: Express = express();
  const port: number | string = process.env.PORT || 3000;

  dotenv.config();

  database.connect();


  // GraphQL
  app.use("/graphql", requireAuth);

  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    introspection: true,
    context: ({ req }) => {
      return { ...req };
    }
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app: app,
    path: "/graphql"
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};

startServer();

