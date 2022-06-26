var mongoose = require('mongoose'),
Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 8,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },

  token: {
    type: String,
  },
  
  date: {
    type: Date,
    default: Date.now,
  },
});

const User= new mongoose.model('User', userSchema)
module.exports = User;
