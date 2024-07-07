// Accessing own module

// const add = require('./5-create-export-module');
const {addTwoNum, RectArea, CircleArea, name} = require('./5-create-export-module');


let addition = addTwoNum(10,20); // calling add function from 5-create......js file
console.log('Addition: '+addition);
console.log('Addition: '+addTwoNum(5,10));
console.log('Area of Rectangle: '+RectArea(5,5));
console.log('Area of Circle: '+CircleArea(7));
console.log(name);