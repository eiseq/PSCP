var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
    const fname = './Guts.png';
    if (request.url === "/png")
    {
        fs.stat(fname, (err, stat) => {
            if (err) {console.log('error: ', err);}
            else {
                png = fs.readFile(fname, (err, data) => {
                    response.contentType = 'image/jpeg';
                    response.contentLength = stat.size;
                    response.end(data, 'binary');
                });
            }
        });
    }
}).listen(5000);

console.log('Server running at http://localhost:5000/png');