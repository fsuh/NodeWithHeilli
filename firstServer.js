'use strict';

const http = require('http');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'})
    res.write('<h1>Hello</h1>');
    res.end();
});

server.listen(port, host, ()=> console.log(`server ${host}:${port} is serving...`));