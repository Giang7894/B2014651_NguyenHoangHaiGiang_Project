const express=require("express");
const bookrent=require("../controllers/bookrent.controller");

const BookRentRouter=express.Router();

BookRentRouter.route("/").get(bookrent.findAll).post(bookrent.create).delete(bookrent.deleteAll);


BookRentRouter.route("/:id").get(bookrent.findOne).put(bookrent.update).delete(bookrent.delete);

module.exports=BookRentRouter;