const http = require('http');

const host = 'localhost';
const port = 3000;

const h = (r) => {
  let rc = '';
  for (const key in r.headers) rc += `<h3>${key}:${r.headers[key]}</h3>`;
  return rc;
};

const server = http.createServer((req, res) => {
  let b = '';
  req.on('data', (str) => { b += str; console.log('data', b); });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset = utf-8');
  req.on('end', () => res.end(
    '<!DOCTYPE html> <html><head></head><body>'
    + '<h1>Структура запроса</h1>'
    + `<h2>метод: ${req.method}</h2>`
    + `<h2>uri: ${req.url}</h2>`
    + `<h2>версия: ${req.httpVersion}</h2>`
    + `<h2>ЗАГОЛОВКИ</h2>${h(req)}<h2>тело: ${b}</h2>`
    + '</body>'
    + '</html>',
  ));
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
