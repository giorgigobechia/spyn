const mysql = require("mysql2");

module.exports = db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Tviqsi77",
  database: "activityinfo",
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
