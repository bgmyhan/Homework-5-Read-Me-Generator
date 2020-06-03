const inquirer = require('inquirer');

inquirer
.prompt([
  {
    name: 'newquestions',
    message: 'what is your name?',
  },
  {
      name: 'moreTime',
      message: 'OneMoreTime'
  },
])
.then(answers => {
console.log(answers.newquestions)
})
.catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    //   console.log(isTtyError)
    } else {
    //   console.log(isTtyError)
    }
  });


