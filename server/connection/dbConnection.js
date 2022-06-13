const mysql = require("mysql");

module.exports = db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "activityinfo",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
