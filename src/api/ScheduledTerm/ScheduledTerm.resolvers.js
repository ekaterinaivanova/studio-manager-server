const scheduledTerm = (_, args, ctx) => {
  return ctx.models.ScheduledTerm.findById(args.id);
};

const scheduledTerms = (_, args, ctx) => {
  return ctx.models.ScheduledTerm.find({});
};

const newScheduledTerm = (_, args, ctx) => {
  let { input } = args;
  let scheduledTerm = new ctx.models.ScheduledTerm(input);
  return scheduledTerm.save();

};
const removeScheduledTerm = async (_, args, ctx) => {
  const scheduledTerm = await ctx.models.ScheduledTerm
    .findByIdAndRemove(args.id)
    .exec();

  if (!scheduledTerm) {
    throw new Error('No resource');
  }
  return scheduledTerm;
};

module.exports = {
  Query: {
    scheduledTerm,
    scheduledTerms
  },
  Mutation: {
    newScheduledTerm,
    removeScheduledTerm
  },
  ScheduledTerm: {
    id(scheduledTerm) {
      return String(scheduledTerm._id);
    },
    hall(scheduledTerm, _, ctx) {
      return ctx.models.Hall.findById(scheduledTerm.hall);
    },
    scheduledDate(scheduledTerm, _, ctx) {
      return ctx.models.ScheduledDate.findById(scheduledTerm.scheduledDate);
    }

  }
};
