const express=require("express");
const reader=require("../controllers/reader.controller");

const ReaderRouter=express.Router();

ReaderRouter.route("/").get(reader.findAll).post(reader.create);

ReaderRouter.route("/:id").get(reader.findOne).put(reader.update).delete(reader.delete);

ReaderRouter.route("/login").post(reader.login);

ReaderRouter.route('/register').post(reader.register);

module.exports=ReaderRouter;