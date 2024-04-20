const express=require("express");
const employee=require("../controllers/employee.controller");

const EmployeeRouter=express.Router();

EmployeeRouter.route("/").get(employee.findAll).post(employee.create);

EmployeeRouter.route("/:id").get(employee.findOne).put(employee.update).delete(employee.delete);

module.exports=EmployeeRouter;
