var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var db = require('./dbconfig');

db.connect(function(err) {
	if (err) throw err
	console.log('Connected to mysql')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var server = app.listen(8000,"127.0.0.1", function() {
	var host = server.address().address
	var port = server.address().port

	console.log("API listening http://%s:%s", host, port)

});

//rest api to get all customers
app.get('/dates', function (req, res) {
   connection.query('select datedate from dates', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});