import {
  UserType
} from '../types/index';

import {
  GraphQLList,
  GraphQLID,
} from 'graphql';

import User from '../../models/User.model';


const user = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return User.findById(args.id);
  }
};
const users = {
  type: new GraphQLList(UserType),
  resolve() {
    return User.find({});
  }
};

module.exports = {
  user,
  users
};
