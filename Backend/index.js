const http = require('http');
const fs = require('fs');

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
console.log(`request made${req.url}`)

if(req.url === '/about'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+'/about.html').pipe(res);
}

else if(req.url === '/home' || req.url ==='/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+'/index.html').pipe(res);
}

else {

    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname+'/404.html').pipe(res);

}

// res.write('<h1>Hello World<h1>');
// res.end();
})

server.listen(port, hostname,() => {
console.log(`Server running at port http://${hostname}:${port}`);
});