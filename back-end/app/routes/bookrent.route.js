const express=require("express");
const bookrent=require("../controllers/bookrent.controller");

const BookRentRouter=express.Router();

BookRentRouter.route("/").get(bookrent.findAll).post(bookrent.create).delete(bookrent.deleteAll).put(bookrent.findRent);


BookRentRouter.route("/:id").get(bookrent.findOne).put(bookrent.update).delete(bookrent.delete);

BookRentRouter.route('/detail/:id').get(bookrent.findReaderBook).put(bookrent.approve).delete(bookrent.cancel);

BookRentRouter.route('/action/:id').put(bookrent.borrow).patch(bookrent.return);

module.exports=BookRentRouter;