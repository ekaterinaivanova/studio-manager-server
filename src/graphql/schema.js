import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

import {
  scheduledDate,
  scheduledDates,
  scheduledTerm,
  scheduledTerms,
  hall,
  halls,
  user,
  users
} from './queries/index';

import {
  addScheduledDate,
  addScheduledTerm,
  addHall,
  addUser
} from './mutations/index';

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addScheduledDate,
    addScheduledTerm,
    addHall,
    addUser
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    scheduledDate,
    scheduledDates,
    scheduledTerm,
    scheduledTerms,
    hall,
    halls,
    user,
    users
  }
});


module.exports = new GraphQLSchema({
  mutation: Mutation,
  query: RootQuery
});
