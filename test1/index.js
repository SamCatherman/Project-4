var express = require('express');
var app = express();
var parser = require('body-parser');
var http = require('http');
var https = require('https');


app.use(parser.json({extended: true}))
app.use(parser.urlencoded({extended: true}))
app.get
