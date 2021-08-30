// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(questionsData) {

  const { project_title, description, installation, usage, license, confirmation_guidelines, confirmation_test, github, name, email } = questionsData;

  return `
  # ${project_title}
  ![MIT License badge](https://img.shields.io/badge/license-MIT_License-green)

  ## Description

 ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${'```'} bash

  ${installation}

  ${'```'}

  ## Usage

  ${usage}

  ## License
  ${license}

  ## Contributing
  ${confirmation_guidelines}


  ## Tests
  ${confirmation_test}

  ## Questions
  For any inquiries regarding README.gen, please contact ${name} via:
  * GitHub: [${github}](https://github.com/${github})
  * Email: <${email}>

  `;

};

module.exports = generateMarkdown;