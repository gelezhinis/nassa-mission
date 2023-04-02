require('dotenv').config();

const mongoose = require('mongoose');
 
const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error('KONEKSHIONERROR', err);
});

const connectMongoose = async() => {
  return await mongoose.connect(MONGO_URL);
};

const disconnectMongoose = async() => {
  return await mongoose.disconnect();
};

module.exports = {
  connectMongoose,
  disconnectMongoose
};