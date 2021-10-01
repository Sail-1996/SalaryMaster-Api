const mongoose=require("mongoose");

const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.DATABASE_SERVER||" mongodb://localhost:27017/salary-master",{
   
}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("No connection");
}) 