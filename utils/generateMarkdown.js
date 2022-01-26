// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const promptrenderLicenseBadge =  (license) => {
  console.log (`
    =======
    Badges
    =======
    `);
  if(!license.Badge) {
    license.Badge = []
  }
  return inquirer.prompt([   

    {
        type: 'confirmlicense',
        name: 'badge',
        message: 'Would you like to add a license?',
        default: true
      } 
    ]);
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //return `# ${data.title}

//`;
//}
promptrenderLicenseBadge()
module.exports = generateMarkdown;
}