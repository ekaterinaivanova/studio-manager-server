import {
  ScheduledTermType
} from '../types/index';

import {
  GraphQLList,
  GraphQLID,
} from 'graphql';

import ScheduledTerm from '../../models/ScheduledTerm.model';


const scheduledTerm = {
  type: ScheduledTermType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return ScheduledTerm.findById(args.id);
  }
};
const scheduledTerms = {
  type: new GraphQLList(ScheduledTermType),
  resolve() {
    return ScheduledTerm.find({});
  }
};
module.exports = {
  scheduledTerm,
  scheduledTerms
};
