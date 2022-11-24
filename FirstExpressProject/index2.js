'use strict';

const http = require('http')
const https = require('https')

const express = require('express');

const app = express();

const port = 3000;
const host = 'localhost';

const server = http.createServer(app);


app.get('/', (req, res) =>res.send('<h1>Hello World!</h1>'))

app.listen(port,host, ()=>console.log(`Server ${host}:${port} running`))

