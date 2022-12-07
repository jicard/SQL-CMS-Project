const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqlpassword",
  database: "sql_cms",
});
connection.connect(function (err) {
  if (err) console.log("The beatings will continue until morale improves.");
});
module.exports = connection;
