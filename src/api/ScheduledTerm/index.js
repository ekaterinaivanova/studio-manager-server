module.exports = {
  resolvers: require('./ScheduledTerm.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('ScheduledTerm/ScheduledTerm.graphql'),
  model: require('./ScheduledTerm.model')
};
