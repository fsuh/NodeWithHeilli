'use strict';

const DataStorage = require('./storage/dataStorageLayer')

const storage = new DataStorage();

//storage.getAll().then(console.log).catch(console.log)

//storage.getOne().then(console.log).catch(console.log);

// (async () =>{
//     // try{
//     //     const result = await storage.getOne();
//     //     console.log(result)
//     // }
//     // catch(err){
//     //     console.log(err);
//     //     if(err.code === storage.CODES.NOT_FOUND){
//     //         console.log('This is missing')
//     //     }
//     // }
// })();