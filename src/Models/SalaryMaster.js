const mongoose = require("mongoose");

const salarySchema = mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  salary: {
    type: Number,
    required: true,
  },
  actualSalary: {
    type: Number,
    required: true,
  },
  
  
},);

module.exports = mongoose.model('Salary',salarySchema);