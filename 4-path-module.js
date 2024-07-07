// Path Module
const path = require('path');

console.log(path.dirname('D:/Code learning/Node js/NodejsNotesForProfessionals/4-path-module.js'));
console.log(path.extname('D:/Code learning/Node js/NodejsNotesForProfessionals/4-path-module.js'));
// file extension
console.log(path.basename('D:/Code learning/Node js/NodejsNotesForProfessionals/4-path-module.js'));
// Filename

const mypath = path.parse('D:/Code learning/Node js/NodejsNotesForProfessionals/4-path-module.js');
// Oputput in object
// {
//     root: 'D:/',
//     dir: 'D:/Code learning/Node js/NodejsNotesForProfessionals',
//     base: '4-path-module.js',
//     ext: '.js',
//     name: '4-path-module'
//   }
// console.log(mypath);
console.log(mypath.root);