var fs = require("fs"); // filesystem


// fs.readFileSync()

var http = require('http');
http.createServer(function (req, res) {
  
    console.log(req.url);


    if(req.url=="/"){

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync("./index.html").toString());

    }
    if(req.url.indexOf(".css")>0){
        res.writeHead(200, {'Content-Type': 'text/css'});
        console.log(req.url);
        res.end(fs.readFileSync("."+req.url).toString());

    }
    if(req.url.indexOf(".js")>0){
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.end(fs.readFileSync("."+req.url).toString());  
    }
    if(req.url.indexOf(".jpg")>0){
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.end(fs.readFileSync("."+req.url));   
    }
    if(req.url.indexOf(".woff2")>0){

        res.writeHead(200, {'Content-Type': 'application/font-woff2'});
        res.end(fs.readFileSync("."+req.url)); 
    }

    res.end(""); 

}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
