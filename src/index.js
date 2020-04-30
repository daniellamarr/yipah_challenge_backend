import express from 'express';
import graphqlHTTP from 'express-graphql';
import { schema, root } from './graphql';
import './db';

const server = express();

server.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

const port = process.env.PORT || 2800;

server.listen(port, () => console.log('listening on port ' + port));

export default server;
