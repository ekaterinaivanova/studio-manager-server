import mongoose from 'mongoose';

const { Schema } = mongoose;

const scheduledDate = new Schema({
  date: { type: Date, required: true, unique: true }
});

module.exports = mongoose.model('scheduledDate', scheduledDate);
