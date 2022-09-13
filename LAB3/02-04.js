var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    if (request.url === "/xmlhttprequest")
    {
        let html = fs.readFileSync('./xmlhttprequest.html');
        response.writeHead(200, {'Content-Type': 'text/html; charset = utf-8'});
        response.end(html);
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/xmlhttprequest');