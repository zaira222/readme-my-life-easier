// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
console.log(inquirer);
const generateReadMe = require('./src/readme-template.js');

// TODO: Create an array of questions for user input
const promptRead = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter your projects title?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your Project?',
    },
   
{
        type: 'input',
        name: 'installation',
        message: 'What do you need for the installation of your project?',

},
{
        type: 'input',
        name: 'usage',
        message: 'How is it supposed to be used?',
},
{
        type: 'input',
        name: 'contributing',
        message: 'Who contributed in your project?',

},
{
        type: 'input',
        name: 'test',
        message: 'Provide examples of your tests?'
},
{
        input: 'input',
        name: 'questions',
        message: 'What questions do you have?'
},
]);
};

const promptSections = (NewData) => {
    console.log(`
    ========
    ReadMe
    ========
    `);
    if(!NewData.ReadMes) {
        NewData.ReadMes = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'table of contents',
            message: 'table of contents?',
            choices: ['title', 'description', 'table of contents', 'Installation', 'Usage', 'Liscense', 'Contributing', 'Tests', 'Questions'],
    },
           
        {
            type: 'input',
            name: 'license',
            message: 'What license does your project use?',
    },
    {
        type: 'confirm',
        name: 'badge',
        message: 'Would you like to add a license?',
        default: false
    }
            ])
            .then(ReadMeData => {
                NewData.ReadMes.push(ReadMeData);
                if(ReadMeData.confirmAddReadMe) {
                    return promptSections(NewData);

                } else {
                    return NewData;
                }
            });
        };
    

// Function call to initialize app
promptRead()
.then(promptSections)
.then(NewData => {
    const pageHTML = generateReadMe(NewData);


fs.writeFile('./index.html', pageHTML, err => {
    if (err) throw err;

    console.log('ReadMe complete!');
});
})