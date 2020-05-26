import mongoose from 'mongoose';


const dbuser = 'studio-admin';
const dbpassword = 'H26RSexbjeKnXc.';
const uri = `mongodb://${dbuser}:${dbpassword}@ds123799.mlab.com:23799/studio-manager`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
const connectToDB = (url = uri) => {
  return mongoose.connect(url, options);
};

module.exports = connectToDB;
