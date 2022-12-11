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
async addDepartment() {
  this.connection = connection;
  await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "Enter the name of the department you would like to add:"
    }
  ])
  .then(function(answer) {
    console.log(answer + " has been added to your departments list.");
    connection.promise().query("INSERT INTO departments (name) VALUES (?)", answer.name);
  })
  return connection.promise().query("SELECT * from departments;")
}
async addRole() {
  this.connection = connection;
  await inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "Enter the name of the role you would like to add:"
    },
    {
      name: "salary",
      type: "number",
      message: "Enter the salary for the role:"
    },
    {
      name: "department_id",
      type: "number",
      message: "Enter the department ID you would like the role added to:"
    }
  ])
  .then(function(answer) {
    console.log(answer.title + " has been added to your roles list.");
    connection.promise().query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.title, answer.salary, answer.department_id]);
  })
  return connection.promise().query("SELECT * from roles;")
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
      type: "number",
      message: "Enter role id (Manager=1, Supervisor=2, Lead=3, Trainer=4, Associate=5):"
    },
    {
      name: "manager_id",
      type: "number",
      message: "Enter the id for the manager this employee will work for:"
    }
  ])
  .then(function(answer) {
    console.log(answer)
    connection.promise().query("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id, answer.manager_id]);
  })
  return this.connection.promise().query("SELECT * from employees;")
}
async updateEmployeeRole() {
  this.connection = connection;
  await inquirer.prompt([
    {
      name: "id",
      type: "number",
      message: "Enter the ID of the employee that needs a role change:"
    }
  ]) 
  .then(async function(answer) {
      var employeeID = answer.id
      console.log(employeeID)
      await inquirer.prompt([
        {
          name: "id",
          type: "number",
          message: "What is the ID of the role you wish to change this employee to?"
        }
      ])
      .then(function (answer) {
        console.log(answer.id)
        let roleID = answer.id
        console.log(roleID)
        connection.promise().query("UPDATE employees SET role_id = ? where id = ?;", [roleID, employeeID]);
        })})
  return this.connection.promise().query("SELECT * from employees;")
  }
}

module.exports = new db(connection);