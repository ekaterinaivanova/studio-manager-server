import { DateTime } from 'luxon';

const formatDate = (stamp, format) => {
  let date = DateTime.fromJSDate(new Date(stamp));
  return date.toFormat(format);
};

module.exports = { formatDate };
