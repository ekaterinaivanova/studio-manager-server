module.exports = {
  resolvers: require('./ScheduledDate.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('ScheduledDate/ScheduledDate.graphql'),
  model: require('./ScheduledDate.model')
};
