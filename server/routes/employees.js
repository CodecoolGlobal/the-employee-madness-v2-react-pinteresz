const express = require ("express");
const EmployeesSearchRouter = express.Router(); // it will be  like a mini application in our main one  // it works just like an app in server.js
EmployeesSearchRouter.use(express.json());

// Mongo BD
const mongoose = require("mongoose");
const EmployeeModel = require("../db/employee.model")
const { MONGO_URL, PORT = 8080 } = process.env;


// Every employee with :search(name) is listed on the /employees/:search route.
EmployeesSearchRouter.get("/:search", async (req, res) => {
       //console.log(req.params.search);
     let searchObject = {}
        searchObject["name"]=new RegExp(req.params.search,"i");
        //console.log(searchObject);
       
     const employee =  await EmployeeModel.find(searchObject)
    //console.log(employee);  
    res.json(employee)
         /* .then(employee => res.json())
          .then(employee => console.log(employee))
          .catch(err => res.status(400).json("Error"));*/
})




module.exports =EmployeesSearchRouter // exporting our router