const MongoDB=require("../urtils/mongodb.util");
const ApiError=require("../api-error");
const BookRentService=require("../services/bookrent.service");

exports.create= async (req,res,next)=>{
    try {
        const bookRentService=new BookRentService(MongoDB.client);
        const document=await bookRentService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500,"Error"));
    }
};

exports.update= async (req,res,next)=>{
    if(Object.keys(req.body).length===0){
        return next(new ApiError(400,"Data can not be empty"));
    }
    try {
        const bookRentService=new BookRentService(MongoDB.client);
        const document=await bookRentService.update(req.params.id,req.body);
        if(!document){
            return next(new ApiError(400,"not found"));
        }else{
            return res.send("Update succeed");
        }
    } catch (error) {
        return next(new ApiError(500,"Error"));
    }
};

exports.delete=async (req,res,next)=>{
    try {
        const bookRentService=new BookRentService(MongoDB.client);
        const document=await bookRentService.delete(req.params.id);
        if(!document){
            return next(new ApiError(400,"Not found"));
        } else{
            return res.send("Delete succedd");
        }
    } catch (error) {
        return next(new ApiError(500,"error"));
    }
};

exports.findOne=async (req,res,next)=>{
    try {
        const bookRentService=new BookRentService(MongoDB.client);
        const document=await bookRentService.findById(req.params.id);
        if(!document){
            return next(new ApiError(400,"Not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500,"Error"));
    }
};

exports.findAll=async (req,res,next)=>{
    let documents=[];

    try {
        const bookRentService=new BookRentService(MongoDB.client);
        documents = await bookRentService.find({});
    } catch (error) {
        return next(new ApiError(500,"Error"));
    }
    return res.send(documents);
};


exports.deleteAll=async(req,res,next)=>{
    try {
        const bookRentService=new BookRentService(MongoDB.client);
        const document=await bookRentService.deleteAll();
        return res.send({
            message: "delete all",
        });
    } catch (error) {
        return next(new ApiError(500,"error"));
    }
}

exports.findRent = async (req, res, next) =>{
    try {
        const bookRentService = new BookRentService(MongoDB.client);
        const document = await bookRentService.find(req.body);
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500, error));
    }
}

exports.findReaderBook = async (req, res, next) => {
    let documents=[]
    try {
        const bookRentService = new BookRentService(MongoDB.client);
        documents = await bookRentService.findByReaderId(req.params.id);
        return res.send(documents);
    } catch (error) {
        return next(new ApiError(500, error));
    }
}

exports.approve = async (req, res, next) => {
    try {
        const bookRentService = new BookRentService(MongoDB.client);
        document = await bookRentService.approve(req.params.id);
    } catch (error) {
        return next(new ApiError(500,error));
    }
}

exports.cancel = async (req, res, next) => {
    try {
        const bookRentService = new BookRentService(MongoDB.client);
        document = await bookRentService.cancel(req.params.id);
    } catch (error) {
        return next(new ApiError(500,error));
    }
}

exports.borrow = async (req, res, next) => {
    try {
        const bookRentService = new BookRentService(MongoDB.client);
        document = await bookRentService.borrowBook(req.params.id,req.body);
    } catch (error) {
        return next(new ApiError(500, error));
    }
}

exports.return = async (req, res, next) => {
    try {
        const bookRentService = new BookRentService(MongoDB.client);
        document = await bookRentService.returnBook(req.params.id,req.body);
    } catch (error) {
        return next(new ApiError(500, error));
    }
}