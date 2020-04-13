
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLList
} from 'graphql';

import { GraphQLDate } from 'graphql-iso-date';
import ScheduledTermType from './ScheduledTerm.type';

import { filterItems } from '../../services/filter';

import ScheduleTermModel from '../../models/ScheduledTerm.model';

const ScheduledDateType = new GraphQLObjectType({
  name: 'ScheduledDate',
  fields: () => ({
    id: { type: GraphQLID },
    date: { type: GraphQLDate },
    scheduledTerms: {
      type: new GraphQLList(ScheduledTermType),
      resolve(parent, args) {
        const filter = {
          scheduledDateId: parent.id
        };

        return filterItems(ScheduleTermModel, filter);
      }
    }
  })
});

module.exports = ScheduledDateType;
