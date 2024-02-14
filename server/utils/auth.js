require('dotenv').config();
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

const secret = process.env.DB_TOK;
const expiration = '2h';

console.log("8", secret);

module.exports = {
  AuthenticationError: new GraphQLError('Could not authenticate user.', {
    extensions: {
      code: 'UNAUTHENTICATED',
    },
  }),
  authMiddleware: function ({ req, res }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    console.log("18", token);
    let authenticatedPerson = null;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
  
    if (token) {
      try {
        const { authenticatedPerson: authPerson } = jwt.verify(token, secret, { maxAge: expiration });
        authenticatedPerson = authPerson;
        req.user = authenticatedPerson;
      } catch (error) {
        console.log('Invalid token', error);
      }
    }
  
    return { user: authenticatedPerson };
  },

  signToken: function ({ email, username, firstLastName, _id }) {
    const payload = { email, username, firstLastName, _id };
    return jwt.sign({ authenticatedPerson: payload }, secret, { expiresIn: expiration });
  },
};