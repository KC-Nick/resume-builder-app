const typeDefs = `
  enum ProficiencyRating {
    BEGINNER
    INTERMEDIATE
    ADVANCED
    EXPERT
  }

  type User {
    _id: ID!
    username: String
    firstLastName: String
    email: String
    password: String
  }

  type Skills {
    _id: ID!
    name: String
    proficiency: ProficiencyRating
  }

  type Resume {
    _id: ID!
    user: User
    opener: String
    skill: [Skills]
    experience: [Experience]
    education: [Education]
  }

  type Experience {
    _id: ID!
    jobTitle: String
    company: String
    startDate: String
    endDate: String
    jobDescription: String
  }

  type Education {
    _id: ID!
    school: String
    degree: String
    fieldOfStudy: String
    startYear: String
    endYear: String
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
`;

  module.exports = typeDefs;