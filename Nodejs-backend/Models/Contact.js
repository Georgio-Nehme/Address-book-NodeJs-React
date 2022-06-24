const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 10,
    max: 255,
  },
  relationship: {
    type:String,
    required: false,
    min: 10,
    max: 255,
  },
  phone: {
    type:String,
    required: true,
    min: 10,
    max: 45,
  },
  location: {
    type:String,
    required: true,
    min: 10,
    max: 255,
  },
  user_id: {
    type:String,
    required: true,
  }
  
});


module.exports = mongoose.model('Contatct', contactSchema);