const mysql = require("mysql2");
const inquire = require("./inquire");

async function runProgram() {
    let toDo = await inquire.openingPrompt();
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
        
    console.log("run ended");
}

async function openingPrompt() {
    let retVal = await inquire.openingPrompt();
    console.log("openingPrompt ended");
    return retVal;
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
