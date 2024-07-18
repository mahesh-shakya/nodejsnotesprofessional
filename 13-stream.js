/*
Streams are objects that let you read data from a source or write data to a destinatnon in continuous fashion. 
Streaming means listening to music or watching video in real time, instead of download a file to you computer and watching it later.
In node.js there are four types of streams-
1.  Readable :- Stream which is used for read operation.
2.  Writable :- Stream which is used for write operation.
3.  Duplex :- Stream which can be used for both read and write operation.
4.  Transform :- A type of duplex stream where the output is computed based on input.



Each type of stream is an EventEmitter instance and throws several events at different instance of times. 
some of the commonly used events are:-
1.  data :- This event is fired when there is data is available to read.
2.  end :-  This event is fired when there is no more data to read.
3.  error :- This event is fired when there is any error receiving or writing data.
4.  finish :- This event in fired when all the data has been flushed to underlying system. 
*/

const fs = require('fs');
const http = require('http');
const server = http.createServer();

server.on("request", (req, res)=>{
    
    /*
    // reading file old way
    fs.readFile("13.1-input.txt",(err, data)=>{
        if(err) return console.error(err);
        res.end(data.toString());
    });
    */

    // Streaming a file from server to user
   const rstream = fs.createReadStream("13.1-input.txt");

   rstream.on("data", (chunkdata)=>{
    res.write(chunkdata);
   });
   rstream.on("end", ()=>{
    res.end();
   });

   rstream.on("error", (err)=>{
    console.log(err);
    res.end("File not found");
   });

});

server.listen(8080, "127.0.0.1");