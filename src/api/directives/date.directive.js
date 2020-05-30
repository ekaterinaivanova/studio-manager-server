import { SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver, GraphQLString } from 'graphql';

import { formatDate } from '../../utils/formatDate';


class FormatDateDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { format: defaultFormat } = this.args;

    field.args.push({
      type: GraphQLString,
      name: 'format'
    });

    field.resolve = async function (root, { format, ...rest }, ctx, info) {
      const result = await resolve.call(this, root, rest, ctx, info);
      if (typeof result === 'string') {
        return formatDate(result, format || defaultFormat);
      }
      return result;
    };
  }
}

module.exports = {
  FormatDateDirective
};
