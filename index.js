const express = require('express')
require("./src/db/conn")
const app = express();

const Penalty = require('./src/Routers/PenaltyRoute');
const Overtime=require("./src/Routers/OvertimeRoute")
const FoodBill=require("./src/Routers/FoodBillRoute")
const Advance=require("./src/Routers/Advance")
const Salary =require("./src/Routers/SalaryMasterRoute")
require('dotenv/config');



app.use(express.json())
app.use(Penalty)
app.use(Overtime)
app.use(FoodBill)
app.use(Advance)
app.use(Salary)
app.listen(5000, ()=>{
    console.log('listening on port 5000');
})