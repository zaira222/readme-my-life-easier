const generateDescription = descriptionText => {
    if(!descriptionText) {
        return '';
    }
    return `  
## Description
* ${descriptionText}
    
    `;
};

const generateInstallation = installationText => {
    if(!installationText) {
        return '';
    }
    return `
## Installation
* ${installationText}
    `;
};

const generateUsage = UsageText => {
    if(!UsageText) {
        return '';
    }
    return `
## Usage
* ${UsageText}
    `;
};

const generateContributing = contributingText => {
    if(!contributingText) {
        return '';
    }
    return `
## Contributing
* ${contributingText}
  
    `;
};

const generateTest = testText => {
    if(!testText) {
        return '';
    }
    return `
## Test
* ${testText}
    `;
};

const generateQuestions = (questionsText)  => {
    if(!questionsText) {
        return '';
    }
    return `
## Questions
* <a class href="https://github.com/${questionsText}"></a>
* ${questionsText}
    `;
};

const generateLicense = (license) => {
return `
## License
* License Badge:


    `;

};


module.exports = readMeData => {
   const {ReadMe,title, description, installation,email,instructions, usage, contributing, test, questions, tableofcontents, License, badge, ...header} = readMeData; 
    return `
#  ${title}
#  ${header.badge}


## Table of Contents:
* <a href="#description">Description</a>
* <a href="#installation">Installation</a>
* <a href="#usage">Usage</a>
* <a href="#contributing">Contributing</a>
* <a href="#test">Tests</a>
* <a href="#questions">Questions</a>
* <a href="#license">License</a>

        
        
 ${generateDescription(description)}
 ${generateInstallation(installation)}
 ${generateUsage(usage)}
 ${generateContributing(contributing)}
 ${generateTest(test)}
 ${generateQuestions(questions)}
* ${email}
* ${instructions}
 ${generateLicense(License)}
            
`;
  };

