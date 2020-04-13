import {
  HallType
} from '../types/index';

import {
  GraphQLList,
  GraphQLID,
} from 'graphql';

import Hall from '../../models/Hall.model';


const hall = {
  type: HallType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Hall.findById(args.id);
  }
};
const halls = {
  type: new GraphQLList(HallType),
  resolve() {
    return Hall.find({});
  }
};

module.exports = {
  hall,
  halls
};
