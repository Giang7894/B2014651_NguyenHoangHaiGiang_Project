const express=require("express");
const publisher=require("../controllers/publisher.controller");

const PublisherRouter=express.Router();

PublisherRouter.route("/").get(publisher.findAll).post(publisher.create);

PublisherRouter.route("/:id").get(publisher.findOne).put(publisher.update).delete(publisher.delete);

module.exports=PublisherRouter;