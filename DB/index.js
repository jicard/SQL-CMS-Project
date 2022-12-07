const connection = require("./connection");
const inquirer = require("inquirer");
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
    return console.log("Feature in development");
    //return this.connection.promise().query("SELECT * from departments;");
  }
  addRole() {
    return console.log("Feature in development");
    //return this.connection.promise().query("SELECT * from roles;");
  }
  async addEmployee() {
    this.connection = connection;
    await inquirer.prompt([
      { 
        name: "first_name",
        type: "input",
        message: "Enter employee first name:"
      },
      {
        name: "last_name",
        type: "input",
        message: "Enter employee last name:"
      },
      {
        name: "role_id",
        type: "input",
        message: "Enter role id (Manager=1, Supervisor=2, Lead=3, Trainer=4, Associate=5):"
      },
      {
        name: "manager_id",
        type: "input",
        message: "Enter the id for the manager this employee will work for:"
      }
      ])
      .then(function(answer) {
        console.log(`${answer.first_name}`)
        connection.promise().query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?)", [answer]);
      })
      return this.connection.promise().query("SELECT * from employees;")
  }
  updateEmployeeRole() {
    return console.log("Feature in development");
  }
}

module.exports = new db(connection);