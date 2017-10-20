const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res)=>{
   
    if(req.url === "/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        const HTML = fs.readFileSync(`${__dirname}/index.html`);
        res.end(HTML)
    } else if(req.url === "/api/user"){
        res.writeHead(200,{'Content-Type':'application/json'});
        const user = JSON.stringify({
            name:"Francis",
            lastname:"Jones"
        });
        res.end(user)
    } else {
        res.writeHead(404);
        res.end();
    }

})

server.listen(8181,'127.0.0.1');
console.log("server is running");
