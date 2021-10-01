const mongoose = require("mongoose");

const overtimeSchema = mongoose.Schema({
    empName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  otAmount: {
    type: Number,
    required: true,
  },
  comments: String,
  
},);

module.exports = mongoose.model('Overtime',overtimeSchema);