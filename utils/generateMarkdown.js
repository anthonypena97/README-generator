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

  return `
  # ${questionsData.project_title} 
  ![MIT License badge](https://img.shields.io/badge/license-MIT_License-green)

  ## Description

  Here goes the project description 

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation


  ${'```'} bash

  ${'```'}

  ## Usage

  ## License
  [MIT](https://choosealicense.com/licenses/mit/)

  ## Contributing

  ## Tests

  ## Questions
  For any inquiries regarding README.gen, please contact Jake Pedigo via:
  * GitHub: [anthonypena97](https://github.com/anthonypena97)
  * Email: <apena5b@alumni.jh.edu>

  `;
}

module.exports = generateMarkdown;
