var mysql = require('mysql');
var connection = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
});

connection.connect(function(err) {
	if (err) throw err
	console.log('Connected to mysql')
})

module.exports = connection;
