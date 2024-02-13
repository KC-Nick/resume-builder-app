const User = require('../models/User');
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
        },

        user: async (parent, { _id }) => {
            return User.findOne({ _id: _id })
        }
    },

    Mutation: {
        addUser: async (parent, { name, email, firstLastName, password }) => {
            const user = await User.create({ name, email, firstLastName, password });
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
            return { token, user };
        },
        addResume: async (parent, { userId, resume }, context) => {

            // try{
            if (context.user) {
                var newResume = User.findOneAndUpdate(
                    { _id: context.user._id },
                    { resumes: { ...resume, userId: context.user._id } },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
                throw new Error("addResume", newResume, context.user._id);
                // throw new Error("newResume", newResume);
                return newResume;
                // }} catch (err) {
                //     console.log(err);
            } else {
                throw new Error("User not on context");
            }
            // throw AuthenticationError;
        },
        removeResume: async (parent, { userId, resumeId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: userId },
                    { $pull: { resumes: { _id: resumeId } } },
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