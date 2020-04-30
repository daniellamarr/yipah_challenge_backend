import Transactions from '../models/Transactions';

const GetAllTransactions = async () => {
  const response = await Transactions.find({});
  return response;
}

export default GetAllTransactions;
