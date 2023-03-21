const mongoose = require("mongoose")
const {model, Schema} = mongoose;

const ToolSchema = new Schema({
    name: String,
    weight: Number
})

const Tool = model("Tool", ToolSchema)

module.exports = Tool;