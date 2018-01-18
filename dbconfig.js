var mysql = require('mysql');

// fill in your database creds here
var connection = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
});

connection.getConnection(function(err) {
    if (err) throw err
    console.log('Connected to mysql')
})

module.exports = connection;

