const db = require("./db/connection");
const inquirer = require("inquirer");
const console_table = require("console.table");
const mysql = require("mysql2");
const question = require("./lib/tracker");

function startApp() {
  console.log(
    `
    ********************************************************************
               Welcome to the employee management system. 
    ******************************************************************** `
  );

  return inquirer
    .prompt([
      {
        type: "list",
        message: "Please select from the following options:",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update Employee Role",
        ],
        name: "menu",
      },
    ])
    .then(function (option) {
        if (option === "View All Departments") {
            viewall();
        }
    });
}

startApp();
