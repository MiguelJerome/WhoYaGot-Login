// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
  }

  type Player{
  _id: ID
  TeamID: Int
  PlayerID: Int
  Name: String
  Team: String
  Position: String
  FantasyPoints: Int
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    player(_id: Id!): Player
}



  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type Auth {
    token: ID!
    user: User
  }

`;


// export the typeDefs
module.exports = typeDefs;