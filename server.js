const inquirer = require("inquirer");
const db = require("./db/index");
//const cTable = require("console.table");

function viewAllDepartments() {
  console.log("Viewing all departments..");
  db.viewAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => mainMenu());
}

function viewAllRoles() {
  console.log("Viewing all roles..");
  db.viewAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => mainMenu());
}

function viewAllEmployees() {
  console.log("Viewing all employees..");
  db.viewAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => mainMenu());
}

async function addDepartment() {
  console.log("Adding a department..");
  db.addDepartment()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => mainMenu());
}

async function addRole() {
  console.log("Adding a role..");
  db.addRole()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => mainMenu());
}

async function addEmployee() {
  console.log("Adding an employee..");
  db.addEmployee()
  .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => mainMenu());
}

async function updateEmployeeRole() {
  console.log("Updating an employee role..");
  db.updateEmployeeRole()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => mainMenu());
}

function exitApp() {
  console.log("Thanks for using SQL CMS! Press CTRL+C to exit the terminal.");
}

async function mainMenu() {
  await inquirer.prompt([
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
        "Update an employee role",
        "Exit"
      ],
    },
  ]) .then((answer) => {
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
    case "Exit":
      exitApp();
      break;
  }
});
}

mainMenu();