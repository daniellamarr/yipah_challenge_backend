import mongo from 'mongoose';

const {Schema, model} = mongo;

const TransactionsSchema = Schema({
  tnx_id: String,
  description: String,
  user: String,
  date: String,
});

const Transactions = model('Transactions', TransactionsSchema);

export default Transactions;
