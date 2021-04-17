const inquirer = require ('inquirer')
const fs = require ('fs')
const Manager = require('./lib/Manager');
const Intern = require ('./lib/Intern');
const Engineer = require ('./lib/Engineer');

const employees = [];

async function createManager () {
  const answers = await inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },

    {
      type: 'input',
      name: 'id',
      message: 'What is your ID number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is your office number?',

    },

  
  ])
  console.log(answers);

  const newManager = new Manager (answers.name, answers.id, answers.email, answers.office);
  employees.push(newManager);

  getEmployeeType();
}

createManager();

async function getEmployeeType () {
  const answers = await inquirer.prompt ([
    {
      type: 'list',
      name: 'managerChoice',
      choices: ['Intern', 'Engineer'],
      message: 'What employee would you like to add?'
    }
  ])

  createEmployee (answers.managerChoice)
  
}

async function createEmployee (employeeType) {
  const answers = await inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?"
    },

    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the employee's email address?",
    },
    
    {
      type: 'input',
      name: 'extraInfo',
      message: employeeType === "Intern" ? "What is the employee's school?" : "What is the employee's github?",
    }
  ]);
  
  const newEmployee = employeeType === "Intern" ? 
  new Intern (answers.name, answers.id, answers.email, answers.extraInfo) : 
  new Engineer (answers.name, answers.id, answers.email, answers.extraInfo);

  employees.push(newEmployee);
  console.log(employees);
}
// create a function that aks a manager to stop adding employees
// if they to add employees, call getEmployeeType function again
