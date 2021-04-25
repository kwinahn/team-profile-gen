const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const generateSite = require('./src/page_template');
const {rejects} = require('assert');
const {resolve} = require('path');

//arrays for users
let engineerArr = [];
let managerArr = [];
let internArr = [];

//merge several arrays in object to send to page-template.js
let employeeArr = {managerArr, engineerArr, internArr};

function promptUser() {
	return inquirer
		.prompt([
			{
				type: 'text',
				name: 'employeename',
				message: `What's this employee's name?(Required)`,
				validate: (employeeInput) => {
					if (employeeInput) {
						return true;
					} else {
						console.log('Please enter the employees name');
						return false;
					}
				},
			},
			{
				type: 'text',
				name: 'id',
				message: `What's this employee's ID number?(Required)`,
				validate: (idInput) => {
					if (idInput) {
						return true;
					} else {
						console.log('Please enter a valid employee ID#');
						return false;
					}
				},
			},
			{
				type: 'text',
				name: 'email',
				message: `What's this employee's email address?(Required)`,
				validate: (emailInput) => {
					if (emailInput) {
						return true;
					} else {
						console.log('Please enter the employees email.');
						return false;
					}
				},
			},
			{
				type: 'list',
				name: 'role',
				message: `What is this employee's role here?(Use arrow keys)`,
				choices: ['Engineer', 'Manager', 'Intern'],
			},
		])
		.then(({employeename, id, email, role}) => {
			if (role === 'Engineer') { //Engineer//
				return inquirer
					.prompt([
						{
							type: 'text',
							name: 'github',
							message: `What's the engineer's github account?(Required)`, 
							validate: (gitInput) => {
								if (gitInput) {
									return true;
								} else {
									console.log('Please enter Github username.');
									return false;
								}
							},
						},
						{
							type: 'confirm',
							name: 'addMore',
							message: 'Would you like to add more employees?',
						},
					])
					.then(({github, addMore}) => {
						engineerArr.push(new Engineer(employeename, id, email, github));
						if (addMore) {
							return promptUser();
						}
					});
			} else if (role === 'Manager') { //Manager//
				return inquirer
					.prompt([
						{
							type: 'text',
							name: 'office',
							message: `What's the manager's office number?(Required)`, 
							validate: (officeInput) => {
								if (officeInput) {
									return true;
								} else {
									console.log('Please enter an office number for manager.');
									return false;
								}
							},
						},
						{
							type: 'confirm',
							name: 'addMore',
							message: 'Would you like to add more employees?',
						},
					])
					.then(({office, addMore}) => {
						managerArr.push(new Manager(employeename, id, email, office));
						if (addMore) {
							return promptUser();
						}
					});
			} else if (role === 'Intern') {  //Intern//
				return inquirer
					.prompt([
						{
							type: 'text',
							name: 'school',
							message: 'What university did the intern attend?(Required)', 
							validate: (schoolInput) => {
								if (schoolInput) {
									return true;
								} else {
									console.log('Please enter the school the intern attended.');
									return false;
								}
							},
						},
						{
							type: 'confirm',
							name: 'addMore',
							message: 'Would you like to add more employees?',
						},
					])
					.then(({school, addMore}) => {
						internArr.push(new Intern(employeename, id, email, school));
						if (addMore) {
							return promptUser();
						}
					});
			}
		});
}

promptUser()
	.then((employeeData) => {
		return generateSite(employeeArr);
	})
	.then((htmlFile) => {
		fs.writeFile('./dist/index.html', htmlFile, (err) => {
			console.log('Your team profile has been created!');
			if (err) {
				rejects(err);
				return;
			}
		});
	});
