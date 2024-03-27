const { ObjectId}= require("mongodb");

class ReaderService{
    constructor(client){
        this.Reader=client.db().collection("readers");
    }
}

module.exports=ReaderService;