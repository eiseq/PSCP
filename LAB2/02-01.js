const http = require('http');
const fs = require('fs');

const host = 'localhost';
const port = 5000;
const url = '/html';

const server = http.createServer((req, res) => {
  if (req.url === url) {
    const html = fs.readFileSync('./index.html');
    res.writeHead(200, { 'Content-Type': 'text/html; charset = utf-8' });
    res.end(html);
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/${url}`);
});
