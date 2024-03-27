const MongoDB=require("../urtils/mongodb.util");
const ApiError=require("../api-error");
const BookService=require("../services/book.service");
const BookService = require("../services/book.service");
const BookService = require("../services/book.service");

exports.create=async (req,res,next)=>{
    if(!req.body?.name || !req.body?.price || !req.body?.quantity){
        return next(new ApiError(400,"Miss informations"));
    }
    try {
        const bookService=new BookService(MongoDB.client);
        const document=await bookService.create(req.body);
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
        const bookService=new BookService(MongoDB.client);
        const document=await bookService.update(req.params.id,req.body);
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
        const bookService=new BookService(MongoDB.client);
        const document=await bookService.delete(req.params.id);
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
        const bookService=new BookService(MongoDB.client);
        const document=await bookService.findById(req.params.id);
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
        const bookService=new BookService(MongoDB.client);
        const {name}=req.query;
        if(name){
            documents=await bookService.findByName(name);
        } else{
            documents=await bookService.find({});
        }
    } catch (error) {
        return next(new ApiError(500,"Error"));
    }
};
exports.findFavorite=async (req,res,next)=>{
    try {
        const bookService=new BookService(MongoDB.client);
        const documents=await bookService.findFavorite();
        return res.send(documents);
    } catch (error) {
        return next(new ApiError(500,"error"));
    }
};

exports.deleteAll=async(req,res,next)=>{
    try {
        const bookService=new BookService(MongoDB.client);
        const document=await bookService.deleteAll();
        return res.send({
            message: "delete all",
        });
    } catch (error) {
        return next(new ApiError(500,"error"));
    }
}