const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  console.log('Connection made');

  socket.on('data', rawHttpRequest => {
    const { path, method } = parseRequest(rawHttpRequest);
    
    if(path === '/' && method === 'GET') {
      const responseHome = createResponse({
        body: '<html><body><h1>hi</h1></body></html>',
        status: '200 OK',
        contentType: 'text/html'
      });
      socket.end(`${responseHome}`);
    } else if(path === '/red' && method === 'GET') {
      const responseRed = createResponse({
        body: '<html><body><h1>red</h1></body></html>',
        status: '200 OK',
        contentType: 'text/html'
      });
      socket.end(`${responseRed}`);
    } else if(path === '/green' && method === 'GET') {
      const responseGreen = createResponse({
        body: '<html><body><h1>green</h1></body></html>',
        status: '200 OK',
        contentType: 'text/html'
      });
      socket.end(`${responseGreen}`);
    } else if(path === '/blue' && method === 'GET') {
      const responseBlue = createResponse({
        body: '<html><body><h1>blue</h1></body></html>',
        status: '200 OK',
        contentType: 'text/html'
      });
      socket.end(`${responseBlue}`);
    } else {
      socket.end(`HTTP/1.1 200 OK
Content-Type: text/html\r
\r
<html><body><h1>Not Found</h1></body></html>`);
    }
  });
});

module.exports = app;
