var express = require ("express");
var bodyParser = require ("body-parser");
var app = express();
var mongooser = require ("mongoose");
var db = mongoose.connect("mongodb+srv://test1:<password>@cluster0-kuxdi.mongodb.net/product?retryWrites=true&w=majority"), 
use

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));







app.get("/", function(req, res){
    res.send("Welcome to my first API!");
});

app.listen(3000, function(){
    console.log("API running on port 3000...");
});