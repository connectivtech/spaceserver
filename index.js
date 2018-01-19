var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
var db = require('./dbconfig_local');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

var server = app.listen(8000,"127.0.0.1", function() {
	var host = server.address().address
	var port = server.address().port

	console.log("API listening http://%s:%s", host, port)

});


app.get('/dates', function (req, res) {
   db.query('select datedate from dates', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

var querySpaces = 'select market, company, location_name, address_1, address_2, address_city, address_state, address_zip from spaces_staging;' ;

app.get('/spaces', function (req, res) {
   db.query(querySpaces, function (error, results, fields) {
	  if (error) throw error;
	  // res.end(JSON.stringify(results));
	  res.json(results);
	});
});

var queryMarkets = 'select market, count(company + location_name) from spaces_staging group by market order by market;' ;

app.get('/markets', function (req, res) {
   db.query(queryMarkets, function (error, results, fields) {
	  if (error) throw error;
	  // res.end(JSON.stringify(results));
	  res.json(results);
	});
});


var queryMarket = 'select market, company, location_name, address_1, address_2, address_city, address_state, address_zip from spaces_staging where market = ?;' ;

app.get('/markets/:id', function (req, res) {
	query = mysql.format(queryMarket, req.params.id) ;  
	console.log(query);
   db.query(query, function (error, results, fields) {
	  if (error) throw error;
	  // res.end(JSON.stringify(results));
	  res.json(results);
	});
});