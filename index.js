const inquirer = require("inquirer");
const path = require('node:path');

const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the movies_db database.`)
);

const userInput = [
  {
    type: 'list',
    name: 'initialPrompt',
    message: 'What would you like to do?',
    choices: ['view all departments', 
    'view all roles', 
    'view all employees',
    'add a department',
    'add a role',
    'add an employee',
    'update an employee role',
    'exit'
  ]
  },
];

// Questions if "add a department" is chosen
const addDeptQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'Enter a department name'
  },
]

// Questions if "add a role" is chosen
const addRoleQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter a role title'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'Enter a salary'
  },
  {
    type: 'input',
    name: 'department_id',
    message: 'Enter the department id'
  }
]

// Questions if "add an employee" is chosen
const addEmpQuestions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'Enter a first name'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'Enter a last name'
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'Enter the role id'
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'Enter the manager id'
  }
]

//querying data from department table
const viewAllDepartments = () => {
const sql = `SELECT id,name FROM department`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
       return;
    } 
    console.table(rows);
    init();
  });
}

//querying data from role table
const viewAllRoles = () => {
  const sql = `SELECT id,title,salary,department_id FROM role`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
         return;
      } 
      console.table(rows);
      init();
    });
  }

//querying data from employee table
const viewAllEmployees = () => {
  const sql = `SELECT id,first_name, last_name, role_id, manager_id FROM employee`;
    
    db.query(sql, (err, rows) => {
      if (err) {
        console.log(err);
         return;
      } 
      console.table(rows);
      init();
    });
  }

//add a department
const addDepartment = async() => {
  const data = await inquirer.prompt(addDeptQuestions)
  const sql = `INSERT INTO department (name) VALUES (?)`;
    
    db.query(sql, [data.name] ,(err, rows) => {
      if (err) {
        console.log(err);
         return;
      }
      console.log('Department added!')
      console.table(rows);
      init();
    });
  }

// add a role
const addRole = async() => {
  const data = await inquirer.prompt(addRoleQuestions)
  const sql = `INSERT INTO role (title, salary, department_id) VALUES (?,?,?)`;
    console.log(data);

    db.query(sql, [data.title, data.salary, data.department_id] ,(err, rows) => {
      if (err) {
        console.log(err);
         return;
      }
      console.log('Role added!');
      console.table(rows);
      init();
    });
  }

// add an employee
const addEmployee = async() => {
  const data = await inquirer.prompt(addEmpQuestions)
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
    
    db.query(sql, [data.first_name, data.last_name, data.role_id, data.manager_id] ,(err, rows) => {
      if (err) {
        console.log(err);
         return;
      }
      console.log('Employee added!');
      console.table(rows);
      init();
    });
  }

//update an employee role
  //add query to pull employee list


// function to initialize app
// if statements to specify what was chosen by user input
async function init() {
 const data = await inquirer.prompt(userInput) 
  //determines user choice
if (data.initialPrompt === "view all departments"){
    viewAllDepartments()
} else if (data.initialPrompt === "view all roles"){
  viewAllRoles()
} else if (data.initialPrompt === "view all employees"){
  viewAllEmployees()
} else if (data.initialPrompt === "add a department"){
  addDepartment()
} else if (data.initialPrompt === "add a role"){
  addRole()
} else if (data.initialPrompt === "add an employee"){
  addEmployee()
  //exit prompt
} else if (data.initialPrompt === "exit"){
  console.log('Have a nice day!')  
  return
}
};

//TODO:
  //select an employee to update their roll
  //seed db with starting data- specifically for employee roles

//query for all employees
//use list as choices array
//{NAME: THIS_EMPLOYEE, VALUE: THISEMPLOYEEID}
//map function to loop through array- for each element in array output obj to match name and value

// Function call to initialize app
init();