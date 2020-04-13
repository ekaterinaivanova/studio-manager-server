import { HallType } from '../types/index';
import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import Hall from '../../models/Hall.model';


const addHall = {
  type: HallType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    participantLimit: { type: GraphQLInt }
  },
  resolve(parent, args) {
    const {
      name,
      participantLimit
    } = args;
    let hall = new Hall({
      name,
      participantLimit
    });
    return hall.save();
  }
};

module.exports = { addHall };
