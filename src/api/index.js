
import merge from 'lodash/merge';

import ScheduledTerm from './ScheduledTerm';
import User from './User';
import Hall from './Hall';
import ScheduledDate from './ScheduledDate';
import { FormatDateDirective } from './directives/date.directive';

module.exports = {
  typeDefs: [
    Hall.typeDefs,
    ScheduledDate.typeDefs,
    ScheduledTerm.typeDefs,
    User.typeDefs
  ].join(' '),
  resolvers: merge({},
    Hall.resolvers,
    ScheduledDate.resolvers,
    ScheduledTerm.resolvers,
    User.resolvers
  ),
  schemaDirectives: {
    formatDate: FormatDateDirective
  },
  context: {
    models: {
      Hall: Hall.model,
      ScheduledDate: ScheduledDate.model,
      ScheduledTerm: ScheduledTerm.model,
      User: User.model
    }
  }
};
