// validator :- before use you have to install first in root directory or project main folder
// npm i validator

const chalk = require('chalk');
const validator = require('validator');

// Here, we are checking a given email true or false
const res = validator.isEmail("mhskhilli2@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));



// complete validator list on npm/validator website