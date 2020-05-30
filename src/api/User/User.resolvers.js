import { formatDate } from '../../utils/formatDate';

const user = (_, args, ctx) => {
  return ctx.models.User.findById(args.id);
};

const users = (_, args, ctx) => {
  return ctx.models.User.find({});
};

const newUser = (_, args, ctx) => {
  let { input } = args;
  let user = new ctx.models.User(input);
  return user.save();

};
const removeUser = async (_, args, ctx) => {
  const user = await ctx.models.User
    .findByIdAndRemove(args.id)
    .exec();

  if (!user) {
    throw new Error('No resource');
  }
  return user;
};

module.exports = {
  Query: {
    user,
    users
  },
  Mutation: {
    newUser,
    removeUser
  },
  User: {
    id(user) {
      return String(user._id);
    },
    formattedDate(user) {
      return formatDate(user.birthDate, 'yyyy. MM. dd.');
    }
  }
};
