const typeDefs = `
  enum ProficiencyRating {
    BEGINNER
    INTERMEDIATE
    ADVANCED
    EXPERT
  }

  type User {
    _id: ID
    name: String
    firstLastName: String
    email: String
    phone: String
    resumes: [Resume]
  }

  type Skills {
    _id: ID!
    name: String
    proficiency: ProficiencyRating
  }

  type Resume {
    _id: ID
    userId: ID
    email: String
    phone: String
    opener: String
    skills: [Skills]
    experience: [Experience]
    education: [Education]
  }

  type Experience {
    _id: ID!
    jobTitle: String
    company: String
    position: String
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
    user(userId: ID!): User
  }

  input ResumeInput {
    name: String
    email: String
    phone: String
    opener: String
    skills: [SkillsInput]
    experience: [ExperienceInput]
    education: [EducationInput]
  }

  input SkillsInput {
    name: String
    proficiency: ProficiencyRating
  }

  input ExperienceInput {
    jobTitle: String
    company: String
    position: String
    startDate: String
    endDate: String
    jobDescription: String
  }

  input EducationInput {
    school: String
    degree: String
    fieldOfStudy: String
    startYear: String
    endYear: String
  }
  
  type Mutation {
    addUser(name: String!, email: String!, firstLastName: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addResume(resume: ResumeInput!): User
    removeResume(userId: ID!, resumeId: ID!): User
    removeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;
