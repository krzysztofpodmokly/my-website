const mongoose = require('mongoose');
const keys = require('../config/keys');

const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
