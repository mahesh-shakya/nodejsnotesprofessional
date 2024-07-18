const http = require('http');
const fs = require('fs');
// const url = require('url');

const server = http.createServer((req, res)=>{
   
    // Reading file synchronous
    const data = fs.readFileSync("11.1-user-api.json", "utf-8");
    const objData = JSON.parse(data);   
    // convert JSON to javascript object        
       

    if(req.url=="/"){
        res.end("hello from Home");
    }
    else if(req.url=="/about"){    
        res.end("hello from About");

    }
    else if(req.url=="/userapi"){   
        res.writeHead(200,{"Content-type": "application/json"});
        res.end(objData[1].employee_name);
        // res.end("Api Data given below:-\n"+data);
        // showing api data on web page        
        // res.end(objData[1].employee_name);
        // http://127.0.0.1:8080/userapi 
        // when hit the user api page objData[1].employee_name show       
        
    }
    else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1> 404 Error Page</h1>");
    }
});
server.listen(8080, "127.0.0.1", ()=>{
    console.log("port listening");
    console.log("Go to browser: "+"http://127.0.0.1:8080");

})


