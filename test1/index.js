//lists dependencies
var express = require('express');
var app = express();
var parser = require('body-parser');
var hbs = require("express-handlebars");
var http = require('http');
var https = require('https');
var mongoose = require('./db/connection')
var RandomSong = mongoose.model("RandomSong")
//sets port,
app.set("port", process.env.PORT || 4000)
//sets handlebars engine
app.set('view engine', 'hbs');
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
//links public folder, body-parser
app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}))
app.use(parser.urlencoded({extended: true}))

//index route
app.get("/", (req, res) => {
  res.render("randomsongs-index");
})

app.get("/api/randomsongs", (req, res) => {
  RandomSong.find({}).then(randomsongs => {
    res.json(randomsongs)
  })
})

app.get("/api/randomsongs/:name", (req, res) => {
  RandomSong.findOne({name: req.params.name}).then(function(randomsong){
    res.json(randomsong);
  })
})

app.get('/api/randomsong', (req, res) => {
  RandomSong.find({}).then(randomsongs => {
    var randomIndex = Math.floor(Math.random() * randomsongs.length)
    res.json(randomsongs[randomIndex])
  })
})
// post an API request?
// app.post("/api/songs", (req, res) => {
//   let query =
// })


app.listen(app.get("port"), () => {
  console.log("alllllooooo");
})
