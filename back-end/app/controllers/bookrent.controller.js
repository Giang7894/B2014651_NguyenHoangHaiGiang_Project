const MongoDB=require("../urtils/mongodb.util");
const ApiError=require("../api-error");
const BookRentService=require("../services/bookrent.service");

exports.create= async (req,res,next)=>{
    if(!req.body?.name){
        return next(new ApiError(400,"Miss informations"));
    }
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
        documents = await bookRentService.findByReaderId(req.params.readerId);
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