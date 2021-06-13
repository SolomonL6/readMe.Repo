// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the Title?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the Description?",
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "What is usage information?",
    },
    {
        type: "input",
        name: "contributions",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?",
    },
    {
        type: "list",
        name: "license",
        choices: ["Apache", "MIT", "GPL","None"],
        message: "What Liscence is application covered under?",
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What  is your email address?",
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            writeToFile('README.md', generateMarkdown({ ...answers }));
        });

        }



// Function call to initialize app
init();
