// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({

  host: "mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "h4rlvg53eqlmld8y",
  password: "wcib8zynhh6afn5z",
  database: "p6b5d503esvog3gi"
});
// host: "localhost",
// user: "root",
// password: "root",
// database: "watson_db"

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
