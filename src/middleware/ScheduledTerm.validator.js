import mongoose from 'mongoose';
import { filterItems } from '../services/filter';
import { DateTime, Interval } from 'luxon';

async function validateTimeIntervals(next) {
  const ScheduledTerm = mongoose.model('scheduledTerm');
  const _this = this;
  const filter = {
    scheduledDateId: _this.scheduledDateId,
    hallId: _this.hallId
  };
  const classMinLimit = 30;
  let validationResult;
  const fromDate = DateTime.fromFormat(_this.timeFrom, 'hh:mm');
  const toDate = DateTime.fromFormat(_this.timeTo, 'hh:mm');
  const { minutes: duration } = toDate.diff(fromDate, 'minutes');
  if (duration < 0) {
    // FROM BEFORE TO VALIDATION
    validationResult = new Error('From date should be earlier than to date');
  } else if (duration < classMinLimit) {
    validationResult = new Error(`Class should last at least ${classMinLimit} minutes`);
  } else {
    try {
      // TIME RANGE OVERLAP VALIDATION
      const results = await filterItems(ScheduledTerm, filter);
      const newInterval = Interval.fromDateTimes(fromDate, toDate);
      if (Array.isArray(results)) {
        const datesOverlap = results.reduce((result, term) => {
          let from = DateTime.fromFormat(term.timeFrom, 'hh:mm');
          let to = DateTime.fromFormat(term.timeTo, 'hh:mm');
          let interval = Interval.fromDateTimes(from, to);
          let overlap = newInterval.overlaps(interval);
          return result || overlap;
        }, false);
        if (datesOverlap) {
          validationResult = new Error(`Term from ${_this.timeFrom} to ${_this.timeTo} has been already taken`);
        }
      }
    } catch (err) {
      validationResult = new Error(`Couldn't validate terms dates ${err}`);
    }
  }
  // LIMIT VALIDATION
  if (validationResult == null) {
    const Hall = mongoose.model('hall');
    try {
      const hall = await Hall.findById(_this.hallId);
      if (hall.participantLimit != null && _this.participantLimit > hall.participantLimit) {
        validationResult = new Error(`Selected hall can allow max ${hall.participantLimit} participants`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  next(validationResult);
}


module.exports = {
  validateTimeIntervals
};
