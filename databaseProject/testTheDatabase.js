'use strict'

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

(async()=>{
    try{
        const result = await db.doQuery('SELECT * FROM employee');
        if(result.resultSet){
            for(const person of result.queryResult){
                console.log(`${person.firstname} ${person.lastname}`);
            }
        }

        const insertResult = await db.doQuery('INSERT INTO employee Values(?,?,?,?,?)', 
        [125, 'Fuh', 'Suh', 'DevOps', 7000]);
        console.log(insertResult)
    }
    catch(err){
        console.log(err)
    }
})();
