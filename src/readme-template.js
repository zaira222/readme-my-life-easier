const generateDescription = descriptionText => {
    if(!descriptionText) {
        return '';
    }
    return `
    <section class="" id="description">
    <h2 class="">Description</h2>
    <p>${descriptionText}</p>
    </section>
    `;
};

const generateInstallation = installationText => {
    if(!installationText) {
        return '';
    }
    return `
    <section class="" id="installation">
    <h2 class="">Installation</h2>
    <p>${installationText}</p>
    </section>
    `;
};

const generateUsage = UsageText => {
    if(!UsageText) {
        return '';
    }
    return `
    <section class="" id="usage">
    <h2 class="">Usage</h2>
    <p>${UsageText}</p>
    </section>
    `;
};

const generateContributing = contributingText => {
    if(!contributingText) {
        return '';
    }
    return `
    <section class="" id="contributing">
    <h2 class="">contributing</h2>
    <p>${contributingText}</p>
    </section>
    `;
};

const generateTest = testText => {
    if(!testText) {
        return '';
    }
    return `
    <section class="" id="test">
    <h2 class="">test</h2>
    <p>${testText}</p>
    </section>
    `;
};

const generateQuestions = questionsText => {
    if(!questionsText) {
        return '';
    }
    return `
    <section class="" id="questions">
    <h2 class="">Questions</h2>
    <p>${questionsText}</p>
    </section>
    `;
};

const generateSections = readmeArr => {
return `

<section class="" id="tableofcontents">
<h2 class="">Table of Contents</h2>
<div class="">
</div>
</section>


<section class="" id="License">
<h2 class="">License</h2>
<div class="">
</div>
</section>


`;
};


module.exports = readMeData => {
   const {ReadMe, description, installation, usage, contributing, test, questions, ...header} = readMeData; 
    return `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initital-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>ReadMe My Life Easier</title>
                    
    </head>
    <body>
      <header>
        <div class="container">
        <h1 class="page-title">${header.title}</h1>
    
        </div>
        </header>
        <main class="container">
             ${generateDescription(description)}
             ${generateInstallation(installation)}
             ${generateUsage(usage)}
             ${generateContributing(contributing)}
             ${generateTest(test)}
            ${generateQuestions(questions)}
            ${generateSections(ReadMe)}
    </main>
    <footer class="container">
    </footer>
</body>
</html>
`;
  };

