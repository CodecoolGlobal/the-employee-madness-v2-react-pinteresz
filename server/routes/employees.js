const express = require ("express");
const EmployeesSearchRouter = express.Router(); // it will be  like a mini application in our main one  // it works just like an app in server.js
EmployeesSearchRouter.use(express.json());

// Mongo BD
const mongoose = require("mongoose");
const EmployeeModel = require("../db/employee.model")
const { MONGO_URL, PORT = 8080 } = process.env;


// Every employee with :search(name) is listed on the /employees/:search route.
EmployeesSearchRouter.get("/:search", async (req, res) => {
   let searchObject = {}
   searchObject["name"]=new RegExp(req.params.search,"i");
       
   const employee =  await EmployeeModel.find(searchObject)
     
   res.json(employee)
})


module.exports = EmployeesSearchRouter // exporting our router