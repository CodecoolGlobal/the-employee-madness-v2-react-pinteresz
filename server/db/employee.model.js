// https://mongoosejs.com/
const mongoose = require("mongoose");

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: String,
  level: String,
  position: String,
  present: {
    type: Boolean,
    default: false
  },
  salary: Number,
  equipment: {
    type: String,
    default: undefined
  },
  kittens: [
    {
     name: String,
     weight: Number
    }
  ],
  work_log: [
    {
      working_hours: Number,
      label: String
    }
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Employee", EmployeeSchema);
