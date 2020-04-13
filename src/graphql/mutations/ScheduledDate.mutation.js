import { ScheduledDateType } from '../types/index';
import {
  GraphQLNonNull
} from 'graphql';
import { GraphQLDate } from 'graphql-iso-date';

import ScheduledDate from '../../models/ScheduledDate.model';


const addScheduledDate = {
  type: ScheduledDateType,
  args: {
    date: { type: new GraphQLNonNull(GraphQLDate) }
  },
  resolve(parent, args) {
    let scheduledDateResult = new ScheduledDate({
      date: args.date
    });
    return scheduledDateResult.save();
  }
};

module.exports = { addScheduledDate };
