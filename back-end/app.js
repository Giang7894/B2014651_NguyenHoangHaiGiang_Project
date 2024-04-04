const express=require("express");
const cors=require("cors");
const ApiError=require("./app/api-error");

const BookRouter=require("./app/routes/book.route");
const ReaderRouter=require("./app/routes/reader.route");
const EmployeeRouter=require("./app/routes/employee.route");
const PublisherRouter = require("./app/routes/publisher.route");
const BookRentRouter = require("./app/routes/bookrent.route");
const passport = require("passport");



const session = require('express-session');
const app = express();



app.use(cors());
app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET' 
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/book",BookRouter);
app.use("/api/employee",EmployeeRouter);
app.use("/api/reader",ReaderRouter);
app.use("/api/publisher", PublisherRouter);
app.use("/api/bookrent", BookRentRouter);



app.get("/",(req,res)=>{
    res.json({message:"Hello"});
});

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/success');
    });
  
app.get("/sucess", (req, res) => {
    res.json({ message: "Success" });
});

app.get("/error", (req, res) => {
    res.json({ message: "Error" });
})

app.use((req,res,next)=>{
    return next(new ApiError(404,"Not found"));
});

app.use((req,res,next)=>{
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports=app;