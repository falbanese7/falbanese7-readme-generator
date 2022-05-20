const licenses = ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'];
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenses[0]) {
    return "[![License: GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-brightgreen)](https://choosealicense.com/licenses/agpl-3.0/)";
  } else if (license === licenses[1]) {
    return "[![License: GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)](https://choosealicense.com/licenses/gpl-3.0/)";
  } else if (license === licenses[2]) {
    return "[![License: GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-brightgreen)](https://choosealicense.com/licenses/lgpl-3.0/)";
  } else if (license === licenses[3]) {
    return "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue)](https://choosealicense.com/licenses/mpl-2.0/)";
  } else if (license === licenses[4]) {
    return "[![License: Apache License 2.0'](https://img.shields.io/badge/license-Apache%20License%202.0-blue)](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === licenses[5]) {
    return "[![License: MIT License](https://img.shields.io/badge/license-MIT%20License-blue)](https://choosealicense.com/licenses/mit/)";
  } else if (license === licenses[6]) {
    return "[![License: Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-blue)](https://choosealicense.com/licenses/bsl-1.0/)";
  } else if (license === licenses[7]) {
    return "[![License: The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-blue)](https://choosealicense.com/licenses/unlicense/)";
  } else {
    ""
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenses[0]) {
    return "[![License: GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)";
  } else if (license === licenses[1]) {
    return "[![License: GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)";
  } else if (license === licenses[2]) {
    return "[![License: GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)";
  } else if (license === licenses[3]) {
    return "[![License: Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)";
  } else if (license === licenses[4]) {
    return "[![License: Apache License 2.0'](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === licenses[5]) {
    return "[![License: MIT License](https://choosealicense.com/licenses/mit/)";
  } else if (license === licenses[6]) {
    return "[![License: Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)";
  } else if (license === licenses[7]) {
    return "[![License: The Unlicense](https://choosealicense.com/licenses/unlicense/)";
  } else {
    ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenses[0]) {
    return `Documentation for ${licenses[0]} can be found at:`;
  } else if (license === licenses[1]) {
    return `Documentation for ${licenses[1]} can be found at:`;
  } else if (license === licenses[2]) {
    return `Documentation for ${licenses[2]} can be found at:`;
  } else if (license === licenses[3]) {
    return `Documentation for ${licenses[3]} can be found at:`;
  } else if (license === licenses[4]) {
    return `Documentation for ${licenses[4]} can be found at:`;
  } else if (license === licenses[5]) {
    return `Documentation for ${licenses[5]} can be found at:`;
  } else if (license === licenses[6]) {
    return `Documentation for ${licenses[6]} can be found at:`;
  } else if (license === licenses[7]) {
    return `Documentation for ${licenses[7]} can be found at:`;
  } else {
    ""
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Badges

${renderLicenseBadge(data.license)}

## Description

${data.description}

- ${data.motivation}
- ${data.solved}
- ${data.learnings}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}
![Highlighting code button](images/Screen%20Shot%202022-05-19%20at%201.15.05%20AM.png)
![git clone typed in terminal](images/Screen%20Shot%202022-05-19%20at%201.17.01%20AM.png)

## Usage

${data.usage}

![Right clicking index.js for integrated terminal](images/Screen%20Shot%202022-05-19%20at%201.18.29%20AM.png)
![Typing node index.js into terminal](images/Screen%20Shot%202022-05-19%20at%201.18.44%20AM.png)

## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

${data.tests}

## Credits

Developed by: ${data.authors}

Email: ${data.email}

GitHub Repository: ${data.repo}

GitHub Profile: ${data.gitprofile}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

---

`;
}

module.exports = generateMarkdown;
