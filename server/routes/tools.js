const express = require("express");
const ToolRouter = express.Router();

ToolRouter.use(express.json());

const ToolModel = require("../db/tool.model");

/* Starter tools
{ "name": "Notebook", "weight": 0.5 },
{ "name": "Pencil", "weight": 0.06 },
{ "name": "Pen", "weight": 0.12 },
{ "name": "Book", "weight": 1 }
*/

//Get by letters in input field
ToolRouter.get("/:value", async (req, res) => {
    let searchObject = {}
    searchObject["name"]=new RegExp(req.params.value,"i");
        
    const tools =  await ToolModel.find(searchObject)
      
    return res.json(tools)
})

// Creating new tool
ToolRouter.post("/register", (req, res) => {
    const name = req.body.name;
    const weight = req.body.weight;

    const tool = new ToolModel({
      name,
      weight
    })

    tool.save()
        .then(tool => res.json("Thank you for your registering a new tool."))
        .catch(err => res.status(400).json("Error"));
    })

// Deleting tool
ToolRouter.delete("/:id", async (req, res, next) => {
    try {
      const tool = await ToolModel.findById(req.params.id);
      const deleted = await tool.delete();
      return res.json(deleted);
    } catch (err) {
      return next(err);
    }
  });

module.exports = ToolRouter // exporting our router