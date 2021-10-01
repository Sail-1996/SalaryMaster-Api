
const mongoose = require("mongoose");

const foodBillSchema = mongoose.Schema({
    empName: {
    type: String,
    required: true,
  },
  department: String,
  date: String,
  billNo: {
    type: Number,
    required: true,
  },
  foodAmount: {
    type: Number,
    required: true,
  },
 
  
},);

module.exports = mongoose.model('FoodBill',foodBillSchema);