const { ObjectId}= require("mongodb");

class BookRentService{
    constructor(client){
        this.BookRent=client.db().collection("bookrent");
    }
    extractBookRentData(payload){
        const bookrent={
            bookId: payload.bookId,
            readerId: payload.readerId,
            status: 0,
            reqDate: payload.reqDate,
        };

        Object.keys(bookrent).forEach(
            (key)=>bookrent[key]===undefined && delete bookrent[key]
        );
        return bookrent;
    }

    async create(payload){
        const result=await this.BookRent.insertOne(
            {
                bookId: payload.bookId,
                readerId: payload.readerId,
                status: 0,
                reqDate: new Date(),
            }
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

    async findRent(data) {
        return await this.BookRent.findOne({
            readerId: data.readerId,
            bookId: data.bookId,
        })
    }

    async approve(id) {
        const date = Date.now();
        return await this.BookRent.updateOne(
            { _id: ObjectId.isValid(id) ? new ObjectId(id) : null, },
            { $inc: { status: 1 } },
            {$set: {rentedDate: date}},
            { returnDocument: "after", upsert: true },
        );
    }

    async cancel(id) {
        return await this.BookRent.updateOne(
            { _id: ObjectId.isValid(id) ? new ObjectId(id) : null, },
            { $inc: { status: -1 } },
            { returnDocument: "after", upsert: true },
        );        
    }

    async borrowBook(id,data) {
        return await this.BookRent.updateOne(
            { _id: ObjectId.isValid(id) ? new ObjectId(id) : null },
            { $set: { rentDate: new Date(),employee1: data.id } },
            { returnDocument: "after", upsert: true },);
    }

    async returnBook(id,data) {
        return await this.BookRent.updateOne(
            { _id: ObjectId.isValid(id) ? new ObjectId(id) : null },
            { $set: { returnDate: new Date(),employee2: data.id } },
            { returnDocument: "after", upsert: true },);
    }
}

module.exports=BookRentService;