module.exports = {
  resolvers: require('./User.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('User/User.graphql'),
  model: require('./User.model')
};
