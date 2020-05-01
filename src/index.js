import 'babel-polyfill';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './graphql';
import './db';

const server = express();

server.use(cors());

server.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

const port = process.env.PORT || 2800;

server.listen(port, () => console.log('listening on port ' + port));

export default server;
