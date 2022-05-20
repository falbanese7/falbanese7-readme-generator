const generateMarkdown = require('../utils/generateMarkdown');

describe('generateMarkdwon', () => {
    describe('generateMarkdown', () => {
        it("should call generateMarkdown with the passed in the file and data arguments", () => {
            const newGen = new generateMarkdown();
            const path = "README.md"
            const data = {
                title: "README Generator",
                license: "MIT License",
                description: "description",
                motivation: "test",
                solved: "Solves this",
                learnings: "I learned to test",
                installation: "install this",
                usage: "use it this way",
                tests: "test this way",
                authors: "Fran",
                email: "falbanese96@gmail.com",
                repo: "my repo",
                gitprofile: "my profile"
            }
            // Rest of code goes here

        
        })
    });
});

