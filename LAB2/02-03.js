var http = require('http');

http.createServer(function (request, response) {
    if (request.url === "/api/name")
    {
        response.statusCode = 200;
        response.contentType = 'text/plain';
        response.end('Каплич Виталий Викторович');
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/api/name');