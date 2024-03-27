const MongoDB=require("../urtils/mongodb.util");
const ApiError=require("../api-error");
const PublisherService=require("../services/employee.service");

exports.create= async (req,res,next)=>{
    if(!req.body?.name){
        return next(new ApiError(400,"Miss informations"));
    }
    try {
        const publisherService=new PublisherService(MongoDB.client);
        const document=await publisherService.create(req.body);
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
        const publisherService=new PublisherService(MongoDB.client);
        const document=await publisherService.update(req.params.id,req.body);
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
        const publisherService=new PublisherService(MongoDB.client);
        const document=await publisherService.delete(req.params.id);
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
        const publisherService=new PublisherService(MongoDB.client);
        const document=await publisherService.findById(req.params.id);
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
        const publisherService=new PublisherService(MongoDB.client);
        const {name}=req.query;
        if(name){
            documents=await publisherService.findByName(name);
        } else{
            documents=await publisherService.find({});
        }
    } catch (error) {
        return next(new ApiError(500,"Error"));
    }
    return res.send(documents);
};


