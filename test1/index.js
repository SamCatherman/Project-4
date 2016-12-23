var express = require('express');
var app = express();
var parser = require('body-parser');
var hbs = require("express-handlebars");
var http = require('http');
var https = require('https');
var mongoose = require('./db/connection')
var RandomSong = require("./db/connection")

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}))
app.use(parser.urlencoded({extended: true}))
app.set("port", process.env.PORT || 4000)

app.set('view engine', 'hbs');
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.get("/", (req, res) => {
 // res.send("hello")
 res.render("songs-index");
})
//still doesn't work:
app.get("/api/songs", (req, res) => {
  RandomSong.find({}).then(function(songs){
    res.json(songs)
  })
})
// post an API request?
// app.post("/api/songs", (req, res) => {
//   let query =
// })


app.listen(app.get("port"), () => {
  console.log("alllllooooo");
})
