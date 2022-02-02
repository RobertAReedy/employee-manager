const mysql = require("mysql2");
const inquire = require("./inquire");
const db = require("./db/connection");

async function runProgram() {
    let toDo;
    do {
        toDo = await inquire.openingPrompt();
        if (toDo.openingPrompt === "View Departments")
            viewDepartments();
        else if (toDo.openingPrompt === "View Employee Roles")
            viewRoles();
        else if (toDo.openingPrompt === "View Employees")
            viewEmployees();
        else if (toDo.openingPrompt === "Add Department")
            addDepartment();
        else if (toDo.openingPrompt === "Add Employee Role")
            addRole();
        else if (toDo.openingPrompt === "Add Employee")
            addEmployee();
        else if (toDo.openingPrompt === "Update Employee Role")
            updateEmployeeRole();
    } while (await inquire.ifNextAction() === true);

    console.log("run ended");
}

function viewDepartments() {
    console.log("view departments called");
}

function viewRoles() {
    console.log("view rolls called");
}

function viewEmployees() {
    console.log("view employees called");
}

function addDepartment() {
    console.log("add department called");
}

function addRole() {
    console.log("add role called");
}

function addEmployee() {
    console.log("add employee called");
}

function updateEmployeeRole() {
    console.log("update emp roll called");
}

runProgram();
