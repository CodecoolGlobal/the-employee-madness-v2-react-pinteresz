const mongoose = require("mongoose")
const {model, Schema} = mongoose;

const EquipmentShema = new Schema({
    name: String,
    type: String,
    amount:  Number
})

const Equipment = model("Equipment", EquipmentShema)

module.exports = Equipment;



