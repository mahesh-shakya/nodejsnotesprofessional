/*
SYNCHRONOUS VS ASYNCHRONOUS

SYNCHRONOUS :- Synchronous code is also called “blocking” as it halts the program until all the resources are available. Synchronous execution usually uses to code executing in sequence and the program is executed line by line, one line at a time. When a function is called, the program execution waits until that function returns before continuing to the next line of code. code execute step by step, जब तक एक स्टेप पूरा नहीं होगा तब तक compiler आगे नहीं बड़ेगा, एक कोड पूरा होने के बाद ही आगे का कोड रन होगा

ASYNCHRONOUS :- Asynchronous code is also known as “non-blocking”. The program continues executing and doesn’t wait for external resources (I/O) to be available.
Asynchronous execution applies to execution that doesn’t run in the sequence it appears in the code. The program doesn’t wait for the task to complete and can move on to the next task.

*/

const fs = require('fs');

//Reading file data using asynchronous
let data = fs.readFileSync('thapa/bio2.txt', 'utf-8');
console.log(data);
console.log('After data call.');
//Run step by step



console.log('==================');
fs.readFile('thapa/bio.txt',  "utf8", function(err, data){
    if(err) throw err;
    console.log(data);    
});
console.log('After data call.');
// In this case 'After data call.' show first then file data, because of asynchronous, 
// The program continues executing and doesn’t wait for external resources.