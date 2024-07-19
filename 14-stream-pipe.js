// pipe() method in a Readable Stream is used to attach a Writable stream 
// to the readable stream so that it consequently switches into flowing mode 
// and then pushes all the data that it has to the attached Writable.

// pipe() is a method used to connect a readable stream to a writable stream, 
// allowing data to flow automatically from the source to the destination.

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on("request", (req, res) => {

    const rstream = fs.createReadStream("13.1-input.txt");
    rstream.pipe(res);
    // allowing data to flow automatically from the source to the destination.
    // Very fast method to stream, 

});

server.listen(8080, "127.0.0.1");