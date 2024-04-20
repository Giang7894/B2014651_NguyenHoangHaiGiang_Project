const { ObjectId}= require("mongodb");

class ReaderService{
    constructor(client){
        this.Reader=client.db().collection("readers");
    }
    extractReaderData(payload){
        const reader={
            name: payload.name,
            address:payload.address,
            sex: payload.sex,
            birth: payload.birth,
            phone: payload.phone,
        };

        Object.keys(reader).forEach(
            (key)=>reader[key]===undefined && delete reader[key]
        );
        return reader;
    }

    async create(payload){
        const reader=this.extractReaderData(payload);
        const result=await this.Reader.insertOne(
            reader
        );
        return result;
    }
    async findByName(name){
        return await this.find({
            name: {$regex: new RegExp(name),$options:"i"},
        });
    }
    
    async find(filter){
        const cursor=await this.Reader.find(filter);
        return await cursor.toArray();
    }
    async findById(id){
        return await this.Reader.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id):null,
        });
    }

    async update(id,payload){
        const filter={
            _id: ObjectId.isValid(id) ? new ObjectId(id):null,
        };
        const update=this.extractReaderData(payload);
        const result=this.Reader.findOneAndUpdate(
            filter,
            {$set: update},
            {returnDocument: "after"},
        );
        return result;
    }

    async delete(id){
        const result=await this.Reader.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id): null,
        });
        return result;
    }
}

module.exports=ReaderService;