const inquirer = require("inquirer");

const openingPromptObj = {
    type: "list",
    name: "openingPrompt",
    message: "What would you like to do?",
    choices: [
        "View Departments", "View Employee Roles",
        "View Employees",
        "Add Department", "Add Employee Role",
        "Add Employee", "Update Employee Role"
    ]
};

//addDepartment below
const addDpt = {
    type: "input",
    name: "addDpt",
    message: "What would you like to name the new department?",
    validate: entry => {
        if (entry) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};

//addRole below
const addRoleName = {
    type: "input",
    name: "addRoleName",
    message: "What would you like to name the new role?",
    validate: entry => {
        if (entry) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};
const addRoleSalary = {
    type: "input",
    name: "addRoleSalary",
    message: "What should the salary for this roll be?",
    validate: entry => {
        if (entry && parseFloat(entry) && entry > 0) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};
const addRoleDpt = {
    type: "input",
    name: "addRoleDpt",
    message: "What department should the roll be part of?",
    validate: entry => {
        if (entry) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};

//addEmployee below
const addEmpFirstName = {
    type: "input",
    name: "addEmpFirstName",
    message: "What's the employee's first name?",
    validate: entry => {
        if (entry) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};
const addEmpLastName = {
    type: "input",
    name: "addEmpLastName",
    message: "What's the employee's last name?",
    validate: entry => {
        if (entry) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};
const addEmpRole = {
    type: "input",
    name: "addEmpRole",
    message: "What's the employee's role?",
    validate: entry => {
        if (entry) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};
const addEmpManager = {
    type: "input",
    name: "addEmpManager",
    message: "Who's the employee's manager?",
    validate: entry => {
        if (entry) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};

//updateEmployeeRole below
const getEmpID = {
    type: "input",
    name: "getEmpID",
    message: "What's the employee's ID?",
    validate: entry => {
        if (entry && parseInt(entry)) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};
const updateEmpRoll = {
    type: "input",
    name: "updateEmpRoll",
    message: "What should the employee's new role be?",
    validate: entry => {
        if (entry) {
            return true;
        }
        else {
            console.log("\nINVALID ENTRY");
            return false;
        }
    }
};

async function openingPrompt() {
    return await inquirer.prompt([openingPromptObj]);
}

async function addDepartment() {
    return await inquirer.prompt([addDpt]);
}

async function addRole() {
    return await inquirer.prompt([
        addRoleName, addRoleSalary, addRoleDpt
    ]);
}

async function addEmployee() {
    return await inquirer.prompt([
        addEmpFirstName, addEmpLastName,
        addEmpRole, addEmpManager
    ]);
}

async function updateEmployeeRole() {
    return await inquirer.prompt([
        getEmpID, updateEmpRoll
    ]);
}

module.exports = { openingPrompt, addDepartment, addRole, addEmployee, updateEmployeeRole };

