var http = require('http');
require('dotenv').config();

http.createServer(function (request, response) {
    if (request.url === "/api/name")
    {
        response.writeHead(200, {'Content-Type': 'text/plain; charset = utf-8'});
        response.end(process.env.FIO);
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/api/name');