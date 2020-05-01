# yipah_challenge_backend

Backend Deployed on heroku [http://daniel-yipah-backend.herokuapp.com](http://daniel-yipah-backend.herokuapp.com/graphql)

## Prerequisites and Technologies Used
The following tools will be needed to run this application successfully:
* Node v12.14 or above
* Npm v6.13 or above
* Graphql
* [Mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

## Installation
**On your Local Machine**
- Follow the installation guide for the prerequisites listed.
- run `npm install` to install application dependencies
- Make sure you have a mongodb server running before proceeding. The link in the prerequisite should help you achieve this.
- Create a `.env` file from `.env.example` and modify. Add your mongodb collection as the DB_DEV.
- run `npm run start:dev` to build app
- Your app should be running on `localhost:2800`. You can access your Graphql data on `localhost:2800/graphql`

## Graphql requests
```graphql
Get all Transactions

{
  AllTransactions {
    tnx_id
    description
    user
    date
  }
}
```

```graphql
View One Transaction

{
  Transaction(tnx_id: "") {
    tnx_id
    description
    user
    date
  }
}
```

