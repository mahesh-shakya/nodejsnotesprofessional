// Creating first Server

const http = require('http');

const server = http.createServer(function(req, res){
    res.end('hello from server side.');
});

server.listen(8080, '127.0.0.1',()=>{
    console.log('Server started successfully !');
})