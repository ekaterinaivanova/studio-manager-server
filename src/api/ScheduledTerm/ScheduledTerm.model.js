import mongoose from 'mongoose';
import { validateTimeIntervals } from '../../middleware/ScheduledTerm.validator';

const { Schema } = mongoose;


const timeValidationError = 'Wrong time format. Should be HH:MM';
const validateTime = time => time.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/);
const timeValidator = {
  validator: validateTime,
  message: timeValidationError
};


const scheduledTerm = new Schema({
  timeFrom: {
    type: String,
    required: true,
    validate: timeValidator
  },
  timeTo: {
    type: String,
    required: true,
    validate: timeValidator
  },
  participantLimit: { type: Number },
  scheduledDate: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'ScheduledDate'
  },
  hall: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'Hall'
  }
});

scheduledTerm.pre('save', validateTimeIntervals);


module.exports = mongoose.model('scheduledTerm', scheduledTerm);
