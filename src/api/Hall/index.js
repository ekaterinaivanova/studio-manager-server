module.exports = {
  resolvers: require('./Hall.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('Hall/Hall.graphql'),
  model: require('./Hall.model')
};
