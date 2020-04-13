import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

import HallModel from '../../models/Hall.model';
import HallType from './Hall.type';

const ScheduledTermType = new GraphQLObjectType({
  name: 'ScheduledTerm',
  fields: () => ({
    id: { type: GraphQLID },
    timeFrom: { type: GraphQLString },
    timeTo: { type: GraphQLString },
    hall: {
      type: HallType,
      resolve(parent) {
        return HallModel.findById(parent.hallId);
      }
    }
  })
});

module.exports = ScheduledTermType;
