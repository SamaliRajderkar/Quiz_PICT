var express=require("express")
var app=express()
var BodyParser=require("body-parser")
var mongoose=require("mongoose")


app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Connecting database
mongoose.connect('mongodb://localhost:27017/Database', { useNewUrlParser: true, useUnifiedTopology: true });

var database=mongoose.connection
database.on('error',()=>console.log("Error in connecting to database"))
database.once('open',()=>console.log("Connected to database"))