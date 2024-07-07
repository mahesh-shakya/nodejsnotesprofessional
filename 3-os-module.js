console.log('operating system module');

const os = require('os');

console.log(os.arch());
// X64

const freeMemory = os.freemem();
console.log(freeMemory);
//output in bytes
// 1 KB = 1024 bytes
// 1 MB = 1024 KB
// 1 GB = 1024 MB
// 1 TB = 1024 GB
console.log(`${freeMemory/1024/1024}`+' MB');

const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`+' GB');

console.log(os.hostname());
//Host name
// console.log(os.cpus());
// configuration of system
console.log(os.platform());
//win32  its windows name
console.log(os.type());
// windowsNT
console.log(os.homedir());
//Home dir
// console.log(os.constants);
// Returns an object containing the operating system's constants for process signals, error cotes etc.

console.log(os.networkInterfaces());
// Returns the network interfaces that has a network address
console.log(os.uptime()/60 +' minutes');
// This method returns an integer value that specifies the number of seconds the system is running i.e. system uptime.






