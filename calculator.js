const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = n1 + n2;
    res.send("The result is "+ result + ".\nThank You, visit again");
});


app.get("/bmicalculator", function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
    var n1 = Number(req.body.w);
    var n2 = Number(req.body.h);
    var result = n1 / (n2 * n2);
    res.send("Your BMI is " + result);
});


app.listen(3000, function(){
    console.log("Server started at port 3000");
});