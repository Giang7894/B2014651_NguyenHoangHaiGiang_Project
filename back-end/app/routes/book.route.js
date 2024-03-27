const express=require("express");
const book=require("../controllers/book.controller");

const BookRouter=express.Router();

BookRouter.route("/").get(book.findAll).post(book.create).delete(book.deleteAll);

BookRouter.route("/favorite").get(book.findFavorite);

BookRouter.route("/:id").get(book.findOne).put(book.update).delete(book.delete);

module.exports=BookRouter;
