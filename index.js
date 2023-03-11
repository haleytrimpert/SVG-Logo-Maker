const inquirer = require('inquirer');
const fs = require('fs');

const questions = ["Enter the text for your logo. Max 3 characters.",
"What text color would you like?",
"What shape would you like your logo to be?",
"What color would you like your shape to be?"];

function writeToFile(fileName, data) {
    fs.writeFileSync('Logo', fileName)
}

function init() {
    inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: questions[0]
    },
    {
        type: 'input',
        name: 'textColor',
        message: questions[1]
    },
    {
        type: 'list',
        name: 'shape',
        message: questions[2],
        choices: ["circle", "triangle", "square"]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: questions[3]
    }
  ])
}