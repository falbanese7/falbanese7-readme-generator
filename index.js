// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const appPrompt = () => {
   return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of your app?',
            name: 'title'
        },       
        {
            type: 'input',
            message: 'Describe your app.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What was the motivation for building this app?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'solved',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learnings'
        },
        {
            type: 'input',
            message: 'What are the steps to install this app?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How do you use this app?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'How do you test this app?',
            name: 'tests'
        },
        {
            type: 'list',
            message: 'Which license would you like to choose?',
            name: 'license',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'input',
            message: 'What is the name of the application creator(s)?',
            name: 'author'
        },
        {
            type: 'input',
            message: 'Please provide your email address.',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Please provide your GitHub profile URL',
            name: 'gitprofile'
        },
    ])
};
// TODO: Create a function to write README file
// function writeReadMe(fileName, data) {
//     fs.writeFile(`${fileName}.md`, data, (err) =>
//     err ? console.error(err) : console.log(`Success! ${fileName}.md has been written.`)
// );
// }

// TODO: Create a function to initialize app
const generateMarkdown = require('./utils/generateMarkdown')

const init = () => {
    appPrompt()
      .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
      .then(() => console.log('Successfully wrote to README.md file'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
