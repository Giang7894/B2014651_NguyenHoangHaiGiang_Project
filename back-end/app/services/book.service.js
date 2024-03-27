const { ObjectId}= require("mongodb");

class BookService{
    constructor(client){
        this.Book=client.db().collection("books");
    }
    extractBookData(payload){
        const book={
            name: payload.name,
            price: payload.name,
            quantity: payload.name,
            publisher: payload.publisher,
            publish_date: payload.publish_date,
            favorite: payload.favorite,
        };

        Object.keys(book).forEach(
            (key)=>book[key]===undefined && delete book[key]
        );
        return book;
    }

    async create(payload){
        const book=this.extractBookData(payload);
        const result=await this.Book.findOneAndUpdate(
            book,
            {returnDocument: "after",upsert:true},
        );
        return result;
    }
    async findByName(name){
        return await this.find({
            name: {$regex: new RegExp(name),$options:"i"},
        });
    }
    
    async find(filter){
        const cursor=await this.Book.find(filter);
        return await cursor.toArray();
    }
    async findById(id){
        return await this.Book.findOne({
            _id: ObjectId.isValid(id) ? new ObjectId(id):null,
        });
    }

    async update(id,payload){
        const filter={
            _id: ObjectId.isValid(id) ? new ObjectId(id):null,
        };
        const update=this.extractBookData(payload);
        const result=this.Book.findOneAndUpdate(
            filter,
            {$set: update},
            {returnDocument: "after"},
        );
        return result;
    }

    async delete(id){
        const result=await this.Book.findOneAndDelete({
            _id: ObjectId(id).isValid() ? new ObjectId(id): null,
        });
        return result;
    }

    async findFavorite(){
        return await this.find({
            favorite:true
        });
    }

    async deleteAll(){
        return await this.Book.deleteMany({});
    }
}

module.exports=BookService;