var mysql = require("mysql");
var connection;

//JawsDB allows site to be uploaded to Heroku while using our mysql database//
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
};

module.exports = connection;
