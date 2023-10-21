//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("home.ejs");
});

app.listen(port, (req,res) => {
    console.log(`Server up and running on port ${port}`);
});