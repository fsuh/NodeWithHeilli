'use strict';

const http = require('http');
const person = require('./person.json')

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json; charset=utf-8'})
    res.end(JSON.stringify(person));
});

server.listen(port, host, ()=> console.log(`server ${host}:${port} is serving...`));