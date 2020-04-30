import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const TransactionsType = new GraphQLObjectType({
  name: 'TransactionsType',
  description: 'Gets all transactions',
  fields: () => ({
    tnx_id: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    user: {
      type: GraphQLString,
    },
    date: {
      type: GraphQLString
    },
  }),
});

export default TransactionsType;
