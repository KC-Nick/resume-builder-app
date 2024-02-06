const { User } = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth')

const resolver = {
    Query: {
        users: async () => {
            return User.find()
        },

        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
        }
    },

Mutation: {
    addUser: async (parent, { name, firstLastName, email, password }) => {
        const user = await User.create({ name, firstLastName, email, password });
        const token = signToken(user);

        return { token, user };
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
            throw AuthenticationError;
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw AuthenticationError;
        }

        const token = signToken(user);
        return ( token, user );
    },
    addResume: async (parent, { userId, resume }, context) => {
        if(context.user) {
            return User.findOneAndUpdate(
                { _id: userId },
                {
                  $addToSet: { resume: resume },  
                },
                {
                  new: true,
                  runValidators: true,  
                }
            );
        }
        throw AuthenticationError;
    },
    removeResume: async (parent, { resume }, context) => {
        if (context.user) {
            return User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { resume: resume } },
                { new: true }
            );
        }
        throw AuthenticationError;
    },
    removeUser: async (parent, args, context) => {
        if (context.user) {
            return User.findOneAndDelete({ _id: context.user._id });
        }
        throw AuthenticationError;
    }
}
};  

module.exports = resolvers;