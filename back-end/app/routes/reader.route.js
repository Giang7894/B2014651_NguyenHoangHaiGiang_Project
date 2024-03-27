const express=require("express");
const reader=require("../controllers/reader.controller");

const router=express.Router();

router.route("/").get(reader.findAll).post(reader.create).delete(reader.delete);

router.route("/:id").get(reader.findOne).put(reader.update).delete(reader.delete);
