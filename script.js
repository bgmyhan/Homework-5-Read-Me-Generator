const fs = require('fs') 
const inquirer = require('inquirer');

inquirer
.prompt([
  {
    name: "websiteName",
    message: 'On what website will this readme be displayed?',
    default: 'www.yourwebsitehere.com'
  },
  {
    type: "input", 
    name: 'companyName',
    message: 'What company or person(s) is this readme for?',
    default: 'Joe Schmoe LLC'
  },
  {
    name: "messageWizard",
    message: "Please fill out the next steps as specifically as your needs require",
    default: 'Press Enter'
  },
  {
    name: "messageWiard",
    message: "Please fill out the next steps as specifically as your needs require",
    default: 'Press Enter'
  },
])
.then(answers => {

// Data which will write in a file. 
let data = "A Read Me by " + answers.websiteName + "." + " For " + answers.companyName + "." + " Prerequisites: What things you need to install the software and how to install them." + 

" Installing: A step by step series of examples that tell you how to get a development env running. Say what the step will be. Give an example. Repeat until finished. End with an example of getting some data out of the system or using it for a little demo" +

" Running the tests! Explain how to run the automated tests for this system. Break down into end to end tests. Explain what these tests test and why. Give an example. And coding style tests. Explain what these tests test and why Give an example" +

" Deployment. Add additional notes about how to deploy this on a live system";


// Write data in 'Output.txt' . 
fs.writeFile('readme.md', data, (err) => {
      
   
    if (err) throw err; 
}) 

})
.catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    //   console.log(isTtyError)
    } else {
    //   console.log(isTtyError)
    }
  });

