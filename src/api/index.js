
import merge from 'lodash/merge';

import ScheduledTerm from './models/ScheduledTerm.model';
import User from './models/User.model';
import Hall from './Hall';
import ScheduledDate from './ScheduledDate';

module.exports = {
  typeDefs: [
    Hall.typeDefs,
    ScheduledDate.typeDefs
  ].join(' '),
  resolvers: merge({},Hall.resolvers, ScheduledDate.resolvers),
  context: {
    models: {
      Hall: Hall.model,
      ScheduledDate: ScheduledDate.model,
      ScheduledTerm,
      User
    }
  }
};
