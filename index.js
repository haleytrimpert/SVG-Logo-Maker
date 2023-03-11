const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require("./utils/generateLogo");

const questions = ["Enter the text for your logo. Max 3 characters.",
"What text color would you like?",
"What shape would you like your logo to be?",
"What color would you like your shape to be?"];

function writeToFile(fileName, data) {
    fs.writeFileSync('logo.svg', fileName)
}

function startLogo() {
    inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: questions[0],
        validate: function (answer) {
            if (answer.length > 3) {
                console.log("\nToo many characters. Try again.")
                return false
            } else {
                return true
            }
        }
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

  .then((data) => {
    const file = generateLogo(data);
    writeToFile(file, data);
    console.log('Logo has been created!')
  })
  .catch((error) => {
    console.log('Something went wrong :(' + error)
  });
}

startLogo();