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
//sets handlebars engine for rendering html
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
// app.use(parser.urlencoded({extended: true}))

//index route
app.get("/", (req, res) => {
  res.render("randomsongs-index");
})
//random songs route
app.get("/api/randomsongs", (req, res) => {
  RandomSong.find({}).then(randomsongs => {
    res.json(randomsongs)
  })
})
//show individual random song
app.get("/api/randomsongs/:name", (req, res) => {
  RandomSong.findOne({name: req.params.name}).then(function(randomsong){
    res.json(randomsong);
  })
})

//post new song
app.post("/api/randomsongs/", (req, res) => {
  RandomSong.create(req.body).then(function(randomsong){
    res.json(randomsong);
  })
})

//delete song
app.delete("/api/randomsong", (req, res) => {
  RandomSong.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({success: true});
  })
})

//edit song
app.put("/api/randomsong", (req, res) => {
  RandomSong.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(randomsong){
    res.json(randomsong);
  })
})

//finds a random song from the database
app.get('/api/randomsong', (req, res) => {
  RandomSong.find({}).then(randomsongs => {
    var randomIndex = Math.floor(Math.random() * randomsongs.length)
    res.json(randomsongs[randomIndex])
  })
})


//gets port
app.listen(app.get("port"), () => {
  console.log("alllllooooo");
})
