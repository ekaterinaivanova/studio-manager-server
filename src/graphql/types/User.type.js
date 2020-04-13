
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
    birthDate: { type: GraphQLDate }
  })
});

module.exports = UserType;
