'use strict';

const cars = require('./cars.json');

console.log(cars);
console.log(cars[0]);
console.log(cars[0].model);

//last car of cars?
console.log(cars[cars.length-1])

for(const car of cars){
    console.log(car.model)
}

for(const car of cars){
    if(car.model==='Fast GT'){
       console.log(car.license);
    }
}
// print all available models. The model is printed only once

const models = [];
for (const car of cars){
    if(!models.includes(car.model)){
        models.push(car.model);
    }
}
console.log(`Available modles:${models.join(',')}`)

const found=[];
for(const car of cars){
    if(car.model==='Fast GT'){
        found.push(car);
    }
}

console.log(found)

console.log("########")

console.log(cars.filter(car => car.model==="Fast GT"));