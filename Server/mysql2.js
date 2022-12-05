const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqlpassword",
  database: "sql_cms",
});
connection.connect();
module.exports = connection;