import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  birthDate: { type: Date, required: true }
});

module.exports = mongoose.model('User', User);
