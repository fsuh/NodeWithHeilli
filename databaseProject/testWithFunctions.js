'use strict';

const Database = require('./database')

const options= {
    host:'127.0.0.1',
    port:3306,
    user:'fuh',
    password:'Suh@123!#',
    database:'employeedb',
    allowPublicKeyRetrieval: true 
};

const db = new Database(options);

run()

// functions

async function getAll(){
    try{
        const result = await db.doQuery('SELECt * FROM employee');
        if(result.resultSet){
            console.log(result.queryResult);
        }
    }
    catch(err){
        console.log(err)
    }
}

// main function

async function run(){
    await getAll();
}

