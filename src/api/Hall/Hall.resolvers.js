const hall = (_, args, ctx) => {
  return ctx.models.Hall.findById(args.id);
};

const halls = (_, args, ctx) => {
  console.log('Wat')
  return ctx.models.Hall.find({});
};
const newHall = (_, args, ctx) => {
  const {
    name,
    participantLimit
  } = args;
  let hall = new ctx.models.Hall({
    name,
    participantLimit
  });
  return hall.save();
};
const removeHall = async (_, args, ctx) => {
  const hallItem = await ctx.models.hall
    .findByIdAndRemove(args.id)
    .exec();

  if (!hallItem) {
    throw new Error('No resource');
  }
  return hallItem;
};

module.exports = {
  Query: {
    hall,
    halls
  },
  Mutation: {
    newHall,
    removeHall
  },
  Hall: {
    id(hall) {
      return String(hall._id);
    }
  }
};
