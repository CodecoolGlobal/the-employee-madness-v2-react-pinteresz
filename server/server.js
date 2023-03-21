require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const EmployeeModel = require("./db/employee.model");


const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1);
}

const app = express();
app.use(express.json());

app.get("/api/employees/", async (req, res) => {
  const employees = await EmployeeModel.find().sort({ created: "desc" });
  return res.json(employees);
});

app.get("/api/employees/:id", async (req, res) => {
  const employee = await EmployeeModel.findById(req.params.id);
  return res.json(employee);
});

app.get("/api/kittens/:id", async (req, res) => {
  const employee = await EmployeeModel.findById(req.params.id);
  return res.json(employee);
});

app.get("/api/top-paid/", async (reg, res) => {
  const employees = await EmployeeModel.find();
  const sortedEmployees = employees.sort(function (a, b) {
    if(a.salary > b.salary){
      return -1
    }
    else if(a.salary > b.salary){
      return 1
    }
    else {
      return 0;
    }
  })

  const highestPaidEmployees = sortedEmployees.slice(0, 3)

  return res.json(highestPaidEmployees);
})



app.get("/api/name_ascending_order/", async (req, res) => {
  const employees = await EmployeeModel.find();
  const sortedEmployees = employees.sort(function (a, b) {
    if(a.name < b.name){
      return -1
    }
    else if(a.name > b.name){
      return 1
    }
    else {
      return 0;
    }
  })
  return res.json(sortedEmployees);
});

app.get("/api/name_descending_order/", async (req, res) => {
  const employees = await EmployeeModel.find();
  const sortedEmployees = employees.sort(function (a, b) {
    if(a.name > b.name){
      return -1
    }
    else if(a.name > b.name){
      return 1
    }
    else {
      return 0;
    }
  })
  return res.json(sortedEmployees);
});

app.get("/api/missingemployees/", async (req, res) => {
  const employees = await EmployeeModel.find({ present: "false" });
  const sortedEmployees = employees.sort(function (a, b) {
    if(a.name < b.name){
      return -1
    }
    else if(a.name > b.name){
      return 1
    }
    else {
      return 0;
    }
  })
  return res.json(sortedEmployees);
});

app.post("/api/employees/", async (req, res, next) => {
  const employee = req.body;

  try {
    const saved = await EmployeeModel.create(employee);
    return res.json(saved);
  } catch (err) {
    return next(err);
  }
});

app.patch("/api/employees/:id", async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } },
      { new: true }
    );
    return res.json(employee);
  } catch (err) {
    return next(err);
  }
});

app.patch("/api/kittens/:id", async (req, res, next) =>{
  console.log(req.params.id);
  
    try {
      const employee = await EmployeeModel.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { kittens: req.body } },
        { new: true }
      );
      return res.json(employee);
      
    } catch (err) {
      return next(err);
    }
  
  }
  )


app.delete("/api/employees/:id", async (req, res, next) => {
  try {
    const employee = await EmployeeModel.findById(req.params.id);
    const deleted = await employee.delete();
    return res.json(deleted);
  } catch (err) {
    return next(err);
  }
});

const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log("App is listening on 8080");
    console.log("Try /api/employees route right now");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


// Equipment router
const EquipmentRouter = require("./routes/equipments") // importing our router
app.use("/equipments", EquipmentRouter) // to be able to use our router we need to use app.use()  //1st we set the route and then the name of our router

// EmployeesSearch router
const EmployeesSearchRouter = require("./routes/employees")
app.use("/employees", EmployeesSearchRouter)