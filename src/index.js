import { ApolloServer } from 'apollo-server';
import gqlServerConfig from './api';

import db from './db';
db();

const serverOptions = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs'
};

let server = new ApolloServer(gqlServerConfig);

async function startServer() {

  let { url } = await server.listen(serverOptions.port);
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at ${url}`);

}
startServer();
