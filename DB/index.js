const connection = require("./connection");
class db {
  constructor(connection) {
    this.connection = connection;
  }
  viewAllDepartments() {
    return this.connection.promise().query("SELECT * from departments;");
  }
  viewAllRoles() {
    return this.connection.promise().query("SELECT * from roles;");
  }
  viewAllEmployees() {
    return this.connection.promise().query("SELECT * from employees;");
  }
  addDepartment() {
    return this.connection.promise().query("SELECT * from departments;");
  }
  addRole() {
    return this.connection.promise().query("SELECT * from roles;");
  }
  addEmployee() {
    return this.connection.promise().query("SELECT * from employees;");
  }
  updateEmployeeRole() {
    return this.connection.promise().query("SELECT * from roles");
  }
  quit() {
    return this.connection.promise().query("SELECT * from departments;");
  }
}

module.exports = new db(connection);