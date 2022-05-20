const badgeFunctions = require('../utils/generateMarkdown')
const licenses = ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'];

describe('are badge functions working', () => {
    describe('renderLicenseBadge', () => {
        it("should return a string that is equal to the string that the user selects to be passed through the function", () => {
            const badge = [
                "[![License: GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-brightgreen)](https://choosealicense.com/licenses/agpl-3.0/)", 
                "[![License: GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-brightgreen)](https://choosealicense.com/licenses/gpl-3.0/)",
                "[![License: GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-brightgreen)](https://choosealicense.com/licenses/lgpl-3.0/)",
                "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-blue)](https://choosealicense.com/licenses/mpl-2.0/)",
                "[![License: Apache License 2.0'](https://img.shields.io/badge/license-Apache%20License%202.0-blue)](https://choosealicense.com/licenses/apache-2.0/)",
                "[![License: MIT License](https://img.shields.io/badge/license-MIT%20License-blue)](https://choosealicense.com/licenses/mit/)",
                "[![License: Boost Software License 1.0](https://img.shields.io/badge/license-Boost%20Software%20License%201.0-blue)](https://choosealicense.com/licenses/bsl-1.0/)",
                "[![License: The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-blue)](https://choosealicense.com/licenses/unlicense/)"
            ]

            expect(badgeFunctions.renderLicenseBadge(licenses[0])).toEqual(badge[0]);

        });
    });
    describe('renderLicenseLink', () => {
        it("should return a string that is equal to the string that the user selects to be passed through the function", () => {
            const badge = [
                "[![License: GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)", 
                "[![License: GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)",
                "[![License: GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/)",
                "[![License: Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)",
                "[![License: Apache License 2.0'](https://choosealicense.com/licenses/apache-2.0/)",
                "[![License: MIT License](https://choosealicense.com/licenses/mit/)",
                "[![License: Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)",
                "[![License: The Unlicense](https://choosealicense.com/licenses/unlicense/)"
            ]

            expect(badgeFunctions.renderLicenseLink(licenses[7])).toEqual(badge[7]);

        });
    });
    describe('renderLicenseSection', () => {
        it("should return a string that is equal to the string that the user selects to be passed through the function", () => {
            const badge = [
                `Documentation for ${licenses[0]} can be found at:`, 
                `Documentation for ${licenses[1]} can be found at:`,
                `Documentation for ${licenses[2]} can be found at:`,
                `Documentation for ${licenses[3]} can be found at:`,
                `Documentation for ${licenses[4]} can be found at:`,
                `Documentation for ${licenses[5]} can be found at:`,
                `Documentation for ${licenses[6]} can be found at:`,
                `Documentation for ${licenses[7]} can be found at:`
            ]

            expect(badgeFunctions.renderLicenseSection(licenses[4])).toEqual(badge[4]);

        });
    });
});

