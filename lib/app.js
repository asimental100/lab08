const net = require('net');
const parseRequest = require('./utils/parseRequest');

const app = net.createServer(socket => {
  console.log('Connection made');

  socket.on('data', rawHttpRequest => {
    const { path, method } = parseRequest(rawHttpRequest);
    
    if(path === '/' && method === 'GET') {
      socket.end(`HTTP/1.1 200 OK
Content-Type: text/html\r
\r
<html><body><h1>hi</h1></body></html>`);
    } else if(path === '/red' && method === 'GET') {
      socket.end(`HTTP/1.1 200 OK
Content-Type: text/html\r
\r
<html><body><h1>red</h1></body></html>`);
    } else if(path === '/green' && method === 'GET') {
      socket.end(`HTTP/1.1 200 OK
Content-Type: text/html\r
\r
<html><body><h1>green</h1></body></html>`);
    } else if(path === '/blue' && method === 'GET') {
      socket.end(`HTTP/1.1 200 OK
Content-Type: text/html\r
\r
<html><body><h1>blue</h1></body></html>`);
    } else {
      socket.end(`HTTP/1.1 200 OK
Content-Type: text/html\r
\r
<html><body><h1>Not Found</h1></body></html>`);
    }
  });
    
});

module.exports = app;
