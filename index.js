const inquirer = require('inquirer');
const fs = require('fs');

const promptTitle = () => {
    return inquirer.prompt([
        {
       type: 'input',
       name: 'title',
       message: 'What is the title of your Project? (Required)',
       validate: titleInput => {
           if (titleInput) {
               return true;
           } else {
               console.log('Please enter title of your project');
               return false;
            } 
       }
        }
    ])
}

promptTitle()