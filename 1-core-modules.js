/**
 * Nodejs core modules:-
 * Node.js has a set of built-in modules which you can use without any further installation.
 * ----------------------------------------
 * run any js file:- node filename.js
 * ---------------------------------------
 * synchronous- एक के प्रोसेस कम्पलीट होने के बाद दूसरा स्टार्ट होगा, 
 * asynchronous- एक टास्क रनिंग मे है जब तक दूसरा टास्क ले लिया उस पर भी कम करना स्टार्ट कर दिया 
 * 
 */

const fs = require ("fs");
// fs.writeFileSync("readme.txt", "my first text");
// console.log('file created!');

/*
 readme.txt is a file name, If this file doesnot exist in this directory then readme.txt file created and data "my first text" added to the file, if file exist then file data will be deleted or overwrite and new data added to the file.
 */

// fs.appendFileSync("readme.txt","\nthis is append text.");
// data added to the existing file.



// const buf_data = fs.readFileSync('readme.txt');
// console.log(buf_data.toString());
/* 
Node.js includes an additonal data type called buffer, 
this is not avaiable in browser's javascript.
Buffer is mainly used to store binary data,
while reading from a file or receiving packets over the internet.
Buffer data look like:-
<Buffer 6d 79 20 66 69 72 73 74 20 74 65 78 74 20 0a 74 68 69 73 20 69 73 20 61 70 70 65 6e 64 20 74 65 78 74 2e>
*/



fs.renameSync("read.txt", "readme.txt");