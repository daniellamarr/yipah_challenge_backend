import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLString
} from 'graphql';
import GetAllTransactions from '../controllers/GetAllTransactions';
import TransactionsType from './types/Transactions';
import SingleTransaction from '../controllers/SingleTransaction';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Query for Yipah Challenge',
  fields: {
    AllTransactions: {
      type: new GraphQLList(TransactionsType),
      resolve: () => {
        return GetAllTransactions();
      }
    },
    Transaction: {
      type: TransactionsType,
      args: {
        tnx_id: {
          type: GraphQLString
        }
      },
      resolve: (parent, args) => {
        return SingleTransaction(args);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: Query,
});

export default schema;
