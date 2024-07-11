// we can identify that user type on my url
// we can use url module without require, inbuilt
// const url = require('url');



const http = require('http');

const server = http.createServer(function(req, res){
    // console.log(req.url);
    // when someone type on my url & hit enter it will show in console
    // so we can track what user want to access in url 

    if(req.url == "/"){
        res.end('This is home Page');
    }
    else if(req.url == "/contact"){
        res.end('This is Contact Page');
    }
    else if(req.url == "/about"){
        res.write('This is About Page');
        res.end(); // Jab tak ye method call nahi karenge tab tak response send nahi hoga 
    }
    else{

        res.writeHead(404, {"content-type": "text/html"});     
        res.end('<h1>404 error page</h1>');

        // res.writeHead(404);     
        // res.end('404 error page');
        // except home, contact, about typed in url it will show page not found
        // open console/network to check status code
       
    }

});

server.listen(8080, '127.0.0.1',()=>{
    console.log('Server started successfully !');
})



// page found status code 200
// page not found status code 404
/*
STATUS CODE :-
1-  Informational responses (100-199)
2-  Successful responses (200-299)
3-  Redirects (300-399)
4-  Client errors (400-499)
5-  Server errors (500-599)

*/