const express=require("express");
const employee=require("../controllers/employee.controller");

const router=express.Router();

router.route("/").get(employee.findAll).post(employee.create).delete(employee.delete);

router.route("/:id").get(employee.findOne).put(employee.update).delete(employee.delete);
