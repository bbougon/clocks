var express = require("express");
var app = express();
var Clocks = require('./domain/clocks');

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/test", (req, res, next) => {
    let clocks = new Clocks();
    res.json(clocks.all());
});