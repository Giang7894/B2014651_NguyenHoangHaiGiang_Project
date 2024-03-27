const express=require("express");
const publisher=require("../controllers/publisher.controller");

const PublisherRouter=express.PublisherRouter();

PublisherRouter.route("/").get(publisher.findAll).post(publisher.create).delete(publisher.delete);

PublisherRouter.route("/favorite").get(publisher.findFavorite);

PublisherRouter.route("/:id").get(publisher.findOne).put(publisher.update).delete(publisher.delete);

module.exports=PublisherRouter;