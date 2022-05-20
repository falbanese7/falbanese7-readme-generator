const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

jest.mock('fs');

describe('generateMarkdwon', () => {
    describe('write', () => {
        it("should call fs.writeFileSync with the passed in the file and data arguments", () => {
            const readMe = generateMarkdown();
            const path = "README.md"
            const data = {
                name: "Fran",
                age: 25
            }

            readMe.write(path, data);

            expect(fs.writeFileSync).lastCalledWith(path, data);
        })
    });
});

