import mongoose from 'mongoose';

const { Schema } = mongoose;

const Hall = new Schema({
  name: { type: String, required: true },
  participantLimit: { type: Number }
});

module.exports = mongoose.model('Hall', Hall);
