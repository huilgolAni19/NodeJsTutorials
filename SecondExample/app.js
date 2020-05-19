const express = require("express");
const bodyParser = require("body-parser");
let port = 3001;
let app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({ }));  // to support URL-encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.get("/", (req, resp) => {
    resp.send("<h1>Hello World</h1>");
});

app.get("/add/:num1/:num2", (req, resp) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let result = parseInt(num1) + parseInt(num2);
    resp.send(`Addition of ${num1} and ${num2} is ${result}`);
});

app.get("/sub/:num1/:num2", (req, resp) => {
    let num1 = req.params.num1;
    let num2 = req.params.num2;
    let result = parseInt(num1) - parseInt(num2);
    let jsonResp = {};
    jsonResp["Status"] = "Success";
    jsonResp["Message"] = "Result obtained";
    jsonResp["Result"] = `Subtraction of ${num1} and ${num2} is ${result}`;
    resp.json(jsonResp);
});

app.post("/multiply", (req, resp) => {
    //console.log(req.body);
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    let result = parseInt(num1) * parseInt(num2);
    let jsonResp = {};
    jsonResp["Status"] = "Success";
    jsonResp["Message"] = "Result obtained";
    jsonResp["Result"] = `Product of ${num1} and ${num2} is ${result}`;
    resp.json(jsonResp);
})

app.listen(port, ()=> {
    console.log(`open http://localhost:${port}/`); // String Interpolation
})

/*
//es2015
expresObj.HttpMethod(path, (inputRequest, outResponse) => {
    // if response is plane Text
    outResponse.send(planeText) 
    // if response is JSON object
    outResponse.json() 
})

//es5
expresObj.HttpMethod(path, function(inputRequest, outResponse)  {
    // if response is plane Text
    outResponse.send(planeText) 
    // if response is JSON object
    outResponse.json() 
})
*/ 