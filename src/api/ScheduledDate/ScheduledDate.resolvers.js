const scheduledDate = (_, args, ctx) => {
  return ctx.models.ScheduledDate.findById(args.id);
};

const scheduledDates = (_, args, ctx) => {
  return ctx.models.ScheduledDate.find({});
};
const newScheduledDate = (_, args, ctx) => {
  let scheduledDateResult = new ctx.models.ScheduledDate({
    date: args.date
  });
  return scheduledDateResult.save();
};
const removeScheduledDate = async (_, args, ctx) => {
  const scheduledDate = await ctx.models.ScheduledDate
    .findByIdAndRemove(args.id)
    .exec();

  if (!scheduledDate) {
    throw new Error('No resource');
  }
  return scheduledDate;
};

module.exports = {
  Query: {
    scheduledDate,
    scheduledDates
  },
  Mutation: {
    newScheduledDate,
    removeScheduledDate
  },
  ScheduledDate: {
    id(scheduledDate) {
      return String(scheduledDate._id);
    }
  }
};
