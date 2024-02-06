const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Skills {
    _id: ID
    name: String
    proficiency: String
  }

  type Resume {
    _id: ID
  }

  type Experience {
    _id: ID
  }

  type Education {
    _id: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User

  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
  `