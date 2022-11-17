'use strict';

const {read} = require('./library/utilities');

// read('./iceCreamsStorage/icecreams.json')
//     .then(result=>console.log(result.fileData, result.mime))
//     .catch(err=>console.log(err));

const filePath='./testUtilities.js';

read(filePath).then(console.log).catch(console.log)