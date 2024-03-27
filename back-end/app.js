const express=require("express");
const cors=require("cors");
const ApiError=require("./app/api-error");

const BookRouter=require("./app/routes/book.route");
const ReaderRouter=require("./app/routes/reader.route");
const EmployeeRouter=require("./app/routes/employee.route");
const PublisherRouter=require("./app/routes/publisher.route");

const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"Hello"});
});

app.use("/api/books",BookRouter);
app.use("/api/employee",EmployeeRouter);
app.use("/api/reader",ReaderRouter);
app.use("/api/publisher",PublisherRouter);

app.use((req,res,next)=>{
    return next(new ApiError(404,"Not found"));
});

app.use((req,res,next)=>{
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports=app;