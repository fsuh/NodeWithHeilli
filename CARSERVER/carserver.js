'use strict';

const http = require('http');

const {port, host} = require('./config.json');

const storage = require('./carStorage');

const server =http.createServer((req, res)=>{
    
    const{
        pathname, 
        searchParams} = new URL (`http://${req.headers.host}${req.url}`);

        let resultHtml = '';

    if (pathname==='/cars'){
        resultHtml = createCarsHtml(storage.getAllCars());

    }
    else{
        res.end(resultHtml); //this will be canged later
    }

    res.writeHead(200, {
        'Content-Type':'text/html; charset utf-8'
    });
    res.end(resultHtml)
})


server.listen(port, host,
    ()=> console.log(`Server ${host}:${port} is running...`))

const createCarsHtml(carArray){
    return `<pre>${}`
}