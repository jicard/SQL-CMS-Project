const inquirer = require("inquirer");
const db = require("./db/index");
require("console.table");

const mainMenu = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "Main Menu",
      name: "choices",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role"
      ],
    },
  ]);
};

function viewAllDepartments() {
  db.viewAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => mainMenu());
}

function viewAllRoles() {
  db.viewAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => mainMenu());
}

function viewAllEmployees() {
  db.viewAllEmployees()
    .then(([rows]) => {
      let employee = rows;
      console.table(employee);
    })
    .then(() => mainMenu());
}

function addDepartment() {
  db.addDepartment()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => mainMenu());
}

function addRole() {
  db.addRole()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => mainMenu());
}

function addEmployee() {
  db.addEmployee()
    .then(([rows]) => {
      let employee = rows;
      console.table(employee);
    })
    .then(() => mainMenu());
}

function updateEmployeeRole() {
  db.updateEmployeeRole()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => mainMenu());
}

function quit() {
  db.quit()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => mainMenu());
}

mainMenu().then((answer) => {
  switch (answer.choices) {
    case "View all departments":
      viewAllDepartments();
      break;
    case "View all roles":
      viewAllRoles();
      break;
    case "View all employees":
      viewAllEmployees();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an employee role":
      updateEmployeeRole();
      break;
  }
});