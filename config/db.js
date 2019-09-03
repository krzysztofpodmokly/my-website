const mongoose = require('mongoose');
const config = require('config');
const keys = require('../config/keys');

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
