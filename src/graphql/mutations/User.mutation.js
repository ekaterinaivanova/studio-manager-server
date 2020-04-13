import { UserType } from '../types/index';
import User from '../../models/User.model';

import { GraphQLDate } from 'graphql-iso-date';

import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

const addUser = {
  type: UserType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    lastName: { type: new GraphQLNonNull(GraphQLString) },
    birthDate: { type: new GraphQLNonNull(GraphQLDate) }
  },
  resolve(parent, args) {
    const {
      name,
      lastName,
      birthDate
    } = args;
    let user = new User({
      name,
      lastName,
      birthDate
    });
    return user.save();
  }
};

module.exports = {
  addUser
};
