# Francesco Albanese's README Generator

## Badges

[![License: MIT License](https://img.shields.io/badge/license-MIT%20License-blue)](https://choosealicense.com/licenses/mit/)

## Description

This is a command-line application that prompts the user with questions using inqurier, stores the answers, and creates a readme file by that uses your answers to fill in the spaces for information.

- The motivation was that I was tired of spending time writing a full README file on my own, so I wanted there to be a more automated way to create a README file.
- It allows developers to spend less time worrying about writing a long README file from scratch and makes the process more efficient.
- I learned how to implement npm and node to build a working application.

## Table of Contents

- [Installation](#installation)
- [Usage and Video Walkthrough](#usage-and-video-walkthrough)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

1. Go to the repository linked below in Questions
2. Click Fork and create a forked version of this repository in your own GitHub workspace
3. Click the code button

   ![Highlighting code button](images/Screen%20Shot%202022-05-19%20at%201.15.05%20AM.png)

4. Copy the link
5. Open your terminal
6. Type git clone into the terminal and paste the link you copied from the repository

   ![git clone typed in terminal](images/Screen%20Shot%202022-05-19%20at%201.17.01%20AM.png)

7. This will create a local version of the repository that contains the application. The application is now installed by default.

## Usage and Video Walkthrough

[The Video Walkthrough can be find by clicking on this hyperlinked text.](https://drive.google.com/file/d/1PFjlocqT078jhsXuqHdNvzIiW5baTMse/view?usp=sharing)

1. Open the repository in your preferred code editor (this guide uses Visual Studio Code)
2. Right click the index.js file
3. Select "Open in Integrated Terminal"

   ![Right clicking index.js for integrated terminal](images/Screen%20Shot%202022-05-19%20at%201.18.29%20AM.png)

4. Type "npm i" to install the dependencies

   ![Typing npm i into terminal](images/Screen%20Shot%202022-05-21%20at%208.17.49%20AM.png)

5. After installing the dependcies, type "node index.js" into the terminal

   ![Typing node index.js into terminal](images/Screen%20Shot%202022-05-19%20at%201.18.44%20AM.png)

6. Answer the prompts by typing with your keyboard and hit enter when finished with each response
7. When you choose a license, use your up and down arrow keys on your keyboard to hover over the desired license and hit enter
8. Finish answering the remaining questions
9. After the prompts are answered, a README.md file should be created and updated in the directory of this app with your answers filled in the respective sections of the file

## How to Contribute

[Contributor Covenant](https://www.contributor-covenant.org/)

## Tests

There are unit tests available for this app as well as instructions to manually test.

The available unit tests cover the license badge functionality. To run it, open the test folder and right click the index.test.js file to open it in an integrated terminal, type "npm test" and hit enter. If the tests pass, the badge rendering functionality is working successfully.

To manually test, right click the index.js file to open it in an integrated terminal, type "node index.js", and hit enter. If the prompts appear in the terminal, inquirer is successfully running. Answer the questions and after the last question is answered, the user will see a success message if the README file was successfully updated or an error if it did not.

## Questions?

Developed by: Francesco Albanese

Email me at: falbanese96@gmail.com

GitHub Repository: [https://github.com/falbanese7/falbanese7-readme-generator](https://github.com/falbanese7/falbanese7-readme-generator)

GitHub Profile: [https://github.com/falbanese7](https://github.com/falbanese7)

## License

Documentation for MIT License can be found at:
[License: MIT License](https://choosealicense.com/licenses/mit/)

---
