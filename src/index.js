import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql/schema';

const app = express();

const dbuser = 'studio-admin';
const dbpassword = 'H26RSexbjeKnXc.';
const port = 4000;

const url = `mongodb://${dbuser}:${dbpassword}@ds123799.mlab.com:23799/studio-manager`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

async function startServer() {
  try {
    await mongoose.connect(url, options);
    app.use(graphqlHTTP({
      schema,
      graphiql: true
    }));
    app.listen(port, () => {
      console.log(`Listening for request on port ${port}`);
    });

  } catch (err) {
    console.error(err);
  }
}

startServer();
