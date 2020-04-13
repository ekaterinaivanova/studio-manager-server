import {
  ScheduledDateType
} from '../types/index';

import {
  GraphQLList,
  GraphQLID,
} from 'graphql';

import ScheduledDate from '../../models/ScheduledDate.model';


const scheduledDate = {
  type: ScheduledDateType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return ScheduledDate.findById(args.id);
  }
};
const scheduledDates = {
  type: new GraphQLList(ScheduledDateType),
  resolve() {
    return ScheduledDate.find({});
  }
};

module.exports = {
  scheduledDate,
  scheduledDates
};
