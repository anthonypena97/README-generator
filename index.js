// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generate-markdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?(Required)',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log('Please enter your GitHub name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project-title',
        message: 'What is the title of your project?(Required)',
        validate: title => {
            if (title) {
                return true;
            } else {
                console.log('Please enter your project title');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?(Required)',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please enter your project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Please describe the intallation process(Required)',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please enter a description of how to use your project!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licencse',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    }
];

const answersDone = {}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions, answersDone)
        .then((answers) => {
            console.log(answers);
        })
        .catch((error) => {
            console.log(err);
        });
}

// Function call to initialize app
init();