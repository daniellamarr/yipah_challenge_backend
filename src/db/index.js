import mongo from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const {NODE_ENV, DB_DEV, DB_PROD} = process.env;

const {MongoClient} = mongo;

let url = '';

switch (NODE_ENV) {
  case 'development':
    url = `mongodb://localhost:27017/${DB_DEV}`;
    break;
  case 'production':
    url = DB_PROD;
    break;
  default:
    url = `mongodb://localhost:27017/${DB_DEV}`;
    break;
}

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
