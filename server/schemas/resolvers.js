const { User } = require('../models/User.js');
// const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
        }
    },
}

module.exports = resolvers;