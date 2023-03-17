const express = require ("express");
const EquipmentRouter = express.Router(); // it will be  like a mini application in our main one  // it works just like an app in server.js
EquipmentRouter.use(express.json());

// Mongo BD
const mongoose = require("mongoose");
const EquipmentModel = require("../db/equipment.model");
const { MONGO_URL, PORT = 8080 } = process.env;


EquipmentRouter.get("/", (req, res) => {
    EquipmentModel.find()
      .then(equipments => res.json(equipments))
      .then(equipments => console.log(equipments))
      .catch(err => res.status(400).json("Error"));
})


// Creating new equipment
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


// Deleting equipments
EquipmentRouter.delete("/:id", async (req, res, next) => {
    try {
      const equipment = await EquipmentModel.findById(req.params.id);
      const deleted = await equipment.delete();
      return res.json(deleted);
    } catch (err) {
      return next(err);
    }
  });


module.exports = EquipmentRouter // exporting our router