const express = require ("express");
const EquipmentRouter = express.Router(); // it will be  like a mini application in our main one  // it works just like an app in server.js
EquipmentRouter.use(express.json());

// Mongo BD
const mongoose = require("mongoose");
const EquipmentModel = require("../db/equipment.model");
const { MONGO_URL, PORT = 8080 } = process.env;


// Every superhero employee is listed on the /employees/superheroes route.
EquipmentRouter.post("/register", (req, res) => {
       const name = req.body.name;
       const type = req.body.type;
       const amount = req.body.amount;

       const equipment = new EquipmentModel({
              name,
              type,
              amount
          })

       equipment.save()
          .then(equipment => res.json("Thank you for your registering an equipment."))
          .catch(err => res.status(400).json("Error"));
      })





module.exports = EquipmentRouter // exporting our router