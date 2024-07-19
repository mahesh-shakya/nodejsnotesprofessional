// Node.js program to demonstrate the	 
// readable.pipe() method

// Accessing fs module
var fs = require("fs");

// Create a readable stream
// data read from input.txt file
var readable = fs.createReadStream('13.1-input.txt');

// Create a writable stream
var writable = fs.createWriteStream('output.txt');

// Calling pipe method
readable.pipe(writable);

console.log("Program Ended");
// So, after the piping method the file named “output.text” 
// must contain the data that was in the file “input.text”. 



// cmd command for delete file :- del output.txt 
