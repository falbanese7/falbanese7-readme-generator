// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Where are you from?',
            name: 'hometown',
        },
        {
            type: 'input',
            message: 'What are your favorite hobbies',
            name: 'hobbies',
        },
        {
            type: 'input',
            message: 'Please provide your LinkedIn profile URL',
            name: 'profile'
        },
        {
            type: 'input',
            message: 'Please provide your GitHub profile URL',
            name: 'gitprofile'
        },
    ])
// TODO: Create a function to write README file
    .then((data) => {
        const userValues = generateReadMe(data);
        fs.writeFile('README.md', userValues, error => 
        error ? console.log(error): console.log('Successfully added elements to README file!'))
    });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
