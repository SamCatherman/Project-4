var express = require('express');
var app = express();
var parser = require('body-parser');
var hbs = require("express-handlebars");
var http = require('http');
var https = require('https');

app.use("/assets", express.static("public"));
app.use(parser.json({extended: true}))
app.use(parser.urlencoded({extended: true}))
app.set("port", process.env.PORT || 4000)

app.get("/", (req, res) => {
res.render("songs-index");
})
app.set('view engine', 'hbs');
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.listen(app.get("port"), () => {
  console.log("alllllooooo");
})
