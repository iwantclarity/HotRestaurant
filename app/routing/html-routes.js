//Express dependancy
var express = require('express');
var app = express();

// Basic route that sends the user to the index AJAX Page
app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + '/index.html'));
})
// Basic route that sends the user to the make AJAX Page
app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + '/make.html'));
})
// Basic route that sends the user to the view AJAX Page
app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + '/view.html'));
})