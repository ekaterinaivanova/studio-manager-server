const filterItems = (Model, filter) => {
  const items = Model.find();
  for (const fieldName in filter) {
    // eslint-disable-next-line no-prototype-builtins
    if (
      fieldName !== 'populate' &&
        fieldName !== 'select' &&
        // eslint-disable-next-line no-prototype-builtins
        filter.hasOwnProperty(fieldName)
    ) {
      if (filter[fieldName]) {

        const schemaAttribute = items.schema.path(fieldName);
        if (schemaAttribute) {
          switch (items.schema.path(fieldName).instance) {
          case 'String':
            items.find({
              [fieldName]: { $regex: new RegExp(filter[fieldName]) }
            });
            break;
          case 'Number':
          case 'Boolean':
            items.where(fieldName).equals(filter[fieldName]);
            break;
          default:
          }
        } else {
          //   TODO PAGINATION
          switch (fieldName) {
          case 'page':
          case 'limit':
            filter[fieldName] = Number(filter[fieldName]);
            // eslint-disable-next-line no-restricted-globals
            if (isNaN(filter[fieldName])) {
              throw Error(`${fieldName} should be a number`);
            } else if (!Number.isInteger(Number(filter[fieldName]))) {
              throw Error(`${fieldName} should be an integer`);
            } else if (filter[fieldName] <= 0) {
              throw Error(`${fieldName} should be a positive integer`);
            }
            break;
          default:
            throw Error(`You are not allowed to filter by ${fieldName}`);
          }
        }
      }
    }
  }
  return items;
};

const populateItems = (Model, filter) => {
  const { populate = '' } = filter;
  populate.split(',').forEach(populateField => {
    Model.populate(populateField);
  });
  return Model;
};

module.exports = {
  filterItems,
  populateItems
};
