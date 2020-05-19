
const express = require("express");
const bodyParser = require("body-parser");
let port = 3001;
let app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({ }));  // to support URL-encoded bodies

app.get("/", (request, response) => {
    response.send("Hello Welcome");
});

app.get("/greet/:name", (request, response) => {
    let personName = request.params.name;
    response.send("Hello World Welcome to NodeJs With Express Mr/Mrs "+personName);
});

app.listen(port, () => {
    console.log(`App is running on ${port} Port`);
});