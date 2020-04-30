import Transactions from '../models/Transactions';

const SingleTransaction = async (args) => {
  const response = await Transactions.findOne({tnx_id: args.tnx_id});
  return response;
}

export default SingleTransaction;
