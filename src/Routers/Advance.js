const express = require ('express');
const cors = require("cors");
const router = new express.Router();

const Advance =  require('../Models/Advance');


router.use(cors())
router.post("/advance", async (req, res) => {
    try {
      const emp = new Advance(req.body);
      console.log(req.body);
      const createEmployee = await emp.save();
      res.status(201).send(createEmployee);
    } catch (e) {
      res.status(400).send(e);
    }
  });

 
  
  //read the data of registered Emp
  router.get("/advance", async (req, res) => {
    try {
      const employeeData = await Advance.find();
      res.send(employeeData);
    } catch (e) {
      res.send(e);
    }
  });
  
  //get the indivisual Emp data using id
  
  router.get("/advance/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const employeeData = await Advance.findById(_id);
      console.log(employeeData);
      if (!employeeData) {
        return res.status(404).send();
      } else {
        res.send(employeeData);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  });
  //delete the Emp by it id
  router.delete("/advance/:id", async (req, res) => {
    try {
     
     const deleteEmployee= await Advance.findByIdAndDelete(req.params.id);
     if(!req.params.id){
         return res.status(400).send()
     }
     res.send(deleteEmployee);
    } catch (e) {
        res.status(500).send(e);
    }
  });
  //update the Emp by its id
  router.patch("/advance/:id", async (req, res) => {
      try {
       const _id=req.params.id;
       const overtimeEmp= await Advance.findByIdAndUpdate(_id,req.body,{
           new:true
       });
      //  if(!req.params.id){
      //      return res.status(400).send()
      //  }
       res.send(overtimeEmp);
      } catch (e) {
          res.status(404).send(e);
      }
    });

    module.exports = router;