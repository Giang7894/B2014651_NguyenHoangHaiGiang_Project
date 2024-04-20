const { ObjectId}= require("mongodb");

class BookRentService{
    constructor(client){
        this.BookRent=client.db().collection("bookrent");
    }
    extractBookRentData(payload){
        const bookrent={
            bookId: payload.bookId,
            readerId: payload.readerId,
            rentDate: payload.rentDate,
            returnDate: payload.returnDate,
            status: payload.status,
        };

        Object.keys(bookrent).forEach(
            (key)=>bookrent[key]===undefined && delete bookrent[key]
        );
        return bookrent;
    }

    async create(payload){
        const bookrent=this.extractBookRentData(payload);
        const result=await this.BookRent.insertOne(
            bookrent
        );
        return result;
    }
    async findByDate(date){
        return await this.find({
            name: date,
        });
    }
    
    async find(filter){
        const cursor=await this.BookRent.find(filter);
        return await cursor.toArray();
    }
    async findById(id){
        return await this.BookRent.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id):null,
        });
    }

    async update(id,payload){
        const filter={
            _id: ObjectId.isValid(id) ? new ObjectId(id):null,
        };
        const update=this.extractBookRentData(payload);
        const result=this.BookRent.findOneAndUpdate(
            filter,
            {$set: update},
            {returnDocument: "after"},
        );
        return result;
    }

    async delete(id){
        const result=await this.BookRent.findOneAndDelete({
            _id: ObjectId.isValid(id) ? new ObjectId(id): null,
        });
        return result;
    }

    async deleteAll(){
        return await this.BookRent.deleteMany({});
    }

    async findByReaderId(id){
        return await this.find({
            readerId: id,
        });
    }

    async findByBookId(id){
        return await this.find({
            bookId: id,
        })
    }
}

module.exports=BookRentService;