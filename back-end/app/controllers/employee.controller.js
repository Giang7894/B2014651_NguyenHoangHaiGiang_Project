const MongoDB=require("../urtils/mongodb.util");
const ApiError=require("../api-error");
const EmployeeService=require("../services/employee.service");

exports.create= async (req,res,next)=>{
    if(!req.body?.name){
        return next(new ApiError(400,"Miss informations"));
    }
    try {
        const employeeSerivce=new EmployeeService(MongoDB.client);
        const document=await employeeSerivce.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500,error));
    }
};

exports.update= async (req,res,next)=>{
    if(Object.keys(req.body).length===0){
        return next(new ApiError(400,"Data can not be empty"));
    }
    try {
        const employeeSerivce=new EmployeeService(MongoDB.client);
        const document=await employeeSerivce.update(req.params.id,req.body);
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
        const employeeSerivce=new EmployeeService(MongoDB.client);
        const document=await employeeSerivce.delete(req.params.id);
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
        const employeeSerivce=new EmployeeService(MongoDB.client);
        const document=await employeeSerivce.findById(req.params.id);
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
        const employeeSerivce=new EmployeeService(MongoDB.client);
        const {name}=req.query;
        if(name){
            documents=await employeeSerivce.findByName(name);
        } else{
            documents=await employeeSerivce.find({});
        }
    } catch (error) {
        return next(new ApiError(500,"Error"));
    }
    return res.send(documents);
};


exports.login = async (req, res, next) => {
    try {
        const readerService=new EmployeeService(MongoDB.client);
        const document=await readerService.login(req.body);
        if(!document){
            return next(new ApiError(400,"Not found"));
        }
        return res.send(document);
    } catch (error) {
        return next(new ApiError(500,error));
    }
}