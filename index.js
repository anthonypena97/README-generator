// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const mockData =
{
    name: 'Anthony Pena',
    github: 'anthonypena97',
    email: 'apena5@alumni.jh.edu',
    project_title: 'Weather Dashboard',
    description: 'Application for collecting weather data and forecast',
    confirmInstallation: false,
    depolyed_link: 'weather.com',
    usage: 'Visit deployed site',
    licencse: 'MIT License',
    confirmation_guidelines: false,
    confirmation_test: false
}


const test = [];

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: name => {
            if (name) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
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
        name: 'project_title',
        message: 'What is the title of your project? (Required)',
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
        message: 'What is your project description? (Required)',
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
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter some information on the installation process [y] or provide a deployed link [n] ?',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please enter y for installation process or n for a deployed link');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation process: (Required)',
        when: ({ confirmInstallation }) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        },
        validate: install => {
            if (install) {
                return true;
            } else {
                console.log('Please provide an installation description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'depolyed_link',
        message: 'Provide the deployed link: (Required)',
        when: ({ confirmInstallation }) => {
            if (!confirmInstallation) {
                return true;
            } else {
                return false;
            }
        },
        validate: link => {
            if (link) {
                return true;
            } else {
                console.log('Please provide a deployed link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of the application. (Required)',
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
        type: 'list',
        name: 'licencse',
        message: 'Which license will you be using for this project?',
        choices: ['MIT License', 'GNU GPLv3', 'GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'confirm',
        name: 'confirmation_guidelines',
        message: 'Would you like to provide additional contribution guidelines or simply include the Contributer Convenant?',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please enter y for additional information or n for a including the Contributer Covenant');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'additinal_guidelines',
        message: 'Please provide additional guidelines for contributers:',
        when: ({ confirmInstallation }) => {
            if (confirmInstallation) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmation_test',
        message: 'Would you like to provide information on how to test your project?',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please enter y for adding test information or n to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide information for testing your project: ',
        when: ({ confirmation_test }) => {
            if (confirmation_test) {
                return true;
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(markdown) {

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', markdown, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created'
            });
        });
    });

}

// TODO: Create a function to initialize app
function init() {

    console.log(`
    ============================================
    ~~~~~~~~~~~~~ README GENERATOR ~~~~~~~~~~~~~
    ============================================
    `)

    inquirer

        // INTRODUCE THE USER TO THE APPLICATION AND ASK IF THEY WOULD LIKE TO START
        .prompt([
            {
                type: 'confirm',
                name: 'introduction',
                message: 'Ready to create a README for your project?',
                validate: introduction => {
                    if (introduction) {
                        return true;
                    } else {
                        console.log('Please enter [y] to start or [n] to end!');
                        return false;
                    }
                }
            }
        ])
        .then((confirmation) => {

            // IF USER DECIDES TO START PROCESS, THEN LOGIC GOES THROUGH QUESTIONS ARRAY
            if (confirmation.introduction) {
                return inquirer.prompt(test)
                    .then((answers) => {
                        return generateMarkdown(mockData);
                    })
                    .then((markdown) => {
                        return writeToFile(markdown);
                    })
                    .then((data) => {
                        console.log(data)
                    })
                    .catch((err) => {
                        console.log(err);
                    });;

                // IF USER DECIDES TO NOT START, THEN APPLICATION ENDS
            } else {
                return console.log("Goodbye!");
            }
        })

}

// Function call to initialize app
init();

// TESTS
// generateMarkdown(mockData);