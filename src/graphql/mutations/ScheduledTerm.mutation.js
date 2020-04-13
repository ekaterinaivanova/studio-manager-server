import { ScheduledTermType } from '../types/index';
import ScheduledTerm from '../../models/ScheduledTerm.model';
import {
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';

const addScheduledTerm = {
  type: ScheduledTermType,
  args: {
    timeFrom: { type: new GraphQLNonNull(GraphQLString) },
    timeTo: { type: new GraphQLNonNull(GraphQLString) },
    scheduledDateId: { type: new GraphQLNonNull(GraphQLID) },
    hallId: { type: new GraphQLNonNull(GraphQLID) },
    participantLimit: { type: new GraphQLNonNull(GraphQLInt) }
  },
  resolve(parent, args) {
    const {
      timeFrom,
      timeTo,
      scheduledDateId,
      hallId,
      participantLimit
    } = args;
    let scheduledTerm = new ScheduledTerm({
      timeFrom,
      timeTo,
      scheduledDateId,
      hallId,
      participantLimit
    });
    return scheduledTerm.save();
  }
};

module.exports = {
  addScheduledTerm
};
