var mysql = require("mysql");
var connection;

//JawsDB allows site to be uploaded to Heroku while using our mysql database//
if (process.env.JAWSDB_URL) { //if using JAWSDB on heroku,
  connection = mysql.createConnection(process.env.JAWSDB_URL); //create connection with JAWSDB
  connection.query("SELECT 1 + 1 AS solution", function(err, rows, fields) { //query the connection
    if(err)throw err;
    console.log("The solution is: ", rows[0].solution);
  })
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
}

module.exports = connection;
