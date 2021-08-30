// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseText = require('./licenseText.js');


function renderLicenseBadge(license) {

  if (license === "None") {

    return ``

  } else {

    return `${license} badge`

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  let linkName = license.replace(/\s/g, "_");

  if (license === "None") {

    return ``

  } else {

    return `https://img.shields.io/badge/license-${linkName}-green`

  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, name) {

  let year = new Date().getFullYear();

  if (license === "None") {

    return `No license at this time.`

  } else {

    return `${license}
    
Copyright (c) ${year} ${name}

${licenseText(license)}`

  }

}

function renderInstallation(deployed_link, installation, confirm_installation) {

  if (confirm_installation) {

    return `${'```'}
${installation}
${'```'}`

  } else {

    return `No installation needed.Visit deployed application at ${deployed_link} `

  }

};

function renderTests(confirm_test, tests) {

  if (confirm_test) {

    return `${tests}`

  } else {

    return `There are currently no tests for this application.`
  }

};

function renderContributing(confirm_guidelines, additional_guidelines) {

  if (confirm_guidelines) {

    return `${additional_guidelines} `

  } else {

    return `Please refer to the [Contributor Covenenant](https://www.contributor-covenant.org/) for guidelines on contributing on this project.`

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questionsData) {

  const { project_title, description, github, name, email, confirm_test, confirm_installation, deployed_link, installation, usage, license, confirm_guidelines, tests, additional_guidelines } = questionsData;

  return `# ${project_title}
![${renderLicenseBadge(license)}](${renderLicenseLink(license)})

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
${renderInstallation(deployed_link, installation, confirm_installation)}

## Usage
${usage}

## License
${renderLicenseSection(license, name)}

## Contributing
${renderContributing(confirm_guidelines, additional_guidelines)}

## Tests
${renderTests(confirm_test, tests)}

## Questions
For any inquiries or questions, please contact ${name} via:
* GitHub: [${github}](https://github.com/${github})
* Email: <${email}>`;

};

module.exports = generateMarkdown;