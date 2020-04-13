
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} from 'graphql';

const HallType = new GraphQLObjectType({
  name: 'Hall',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    participantLimit: { type: GraphQLInt }
  })
});

module.exports = HallType;
