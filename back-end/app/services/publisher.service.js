const { ObjectId}= require("mongodb");

class PublisherService{
    constructor(client){
        this.Publisher=client.db().collection("publishers");
    }
}

module.exports=PublisherService;