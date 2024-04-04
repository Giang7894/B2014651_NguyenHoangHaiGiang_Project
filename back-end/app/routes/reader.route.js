const express=require("express");
const reader=require("../controllers/reader.controller");

const ReaderRouter=express.Router();

ReaderRouter.route("/").get(reader.findAll).post(reader.create).delete(reader.delete);

ReaderRouter.route("/:id").get(reader.findOne).put(reader.update).delete(reader.delete);

module.exports=ReaderRouter;