const generateDescription = descriptionText => {
    if(!descriptionText) {
        return '';
    }
    return `
    <section id="description">
    <h2>Description</h2>
    <p>${descriptionText}</p>
    </section>
    `;
};

const generateInstallation = installationText => {
    if(!installationText) {
        return '';
    }
    return `
    <section id="installation">
    <h2>Installation</h2>
    <p>${installationText}</p>
    </section>
    `;
};

const generateUsage = UsageText => {
    if(!UsageText) {
        return '';
    }
    return `
    <section id="usage">
    <h2>Usage</h2>
    <p>${UsageText}</p>
    </section>
    `;
};

const generateContributing = contributingText => {
    if(!contributingText) {
        return '';
    }
    return `
    <section id="contributing">
    <h2>Contributing</h2>
    <p>${contributingText}</p>
    </section>
    `;
};

const generateTest = testText => {
    if(!testText) {
        return '';
    }
    return `
    <section id="test">
    <h2>Test</h2>
    <p>${testText}</p>
    </section>
    `;
};

const generateQuestions = (questionsText)  => {
    if(!questionsText) {
        return '';
    }
    return `
    <section id="questions">
    <h2>Questions</h2>
    <a class href="https://github.com/${questionsText}">Github</a>
    <p>${questionsText}</p>
    </section>
    `;
};

const generateLicense = (license) => {
return `
<section id="License">
<h2>License</h2>
<h9 class>"readme-badge">
License Badge:
<div>
   
    </div>
    </section>
    `;

};


module.exports = readMeData => {
   const {ReadMe, description, installation,email,instructions, usage, contributing, test, questions, tableofcontents, License, badge, ...header} = readMeData; 
    return `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initital-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>ReadMe My Life Easier</title>
                    <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&family=Open+Sans:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="src/style.css"/>
    </head>
    <body>
      <header>
        <div class="container">
        <h1 class="page-title">${header.title} ${header.badge}</h1>
        <h2>Table of Contents:</h2>
        <nav class>
        <ul>
        <li> <a href="#title">Title</a> </li>
        <li> <a href="#tableofcontents">Table of Contents</a> </li>
        <li> <a href="#description">Description</a> </li>
        <li> <a href="#installation">Installation</a> </li>
        <li> <a href="#usage">Usage</a> </li>
        <li> <a href="#contributing">Contributing</a> </li>
        <li> <a href="#test">Tests</a> </li>
        <li> <a href="#questions">Questions</a> </li>
        <li> <a href="#License">License</a> </li>
        </ul>
        </nav>
    
        </div>
        </header>
        <main class="container">
        
             ${generateDescription(description)}
             ${generateInstallation(installation)}
             ${generateUsage(usage)}
             ${generateContributing(contributing)}
             ${generateTest(test)}
            ${generateQuestions(questions)}
            <p>${email}<br>
            ${instructions}
            </p>
            ${generateLicense(License)}
            
    </main>
    <footer class="container">
    </footer>
</body>
</html>
`;
  };

