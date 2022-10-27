'use strict';

const person = require('./person.json');

console.log(person);
console.log(person.firstName);
console.log(`${person.lastName}, ${person.firstName}`);
console.log(person['age']);
console.log(person.age);
console.log ('xxxxxxxxxxx')

function print(fieldname){
    console.log(person[fieldname]);
}
console.log('#######');
print('age')
print('firstName')

function print2(fieldname){
    if(fieldname ==='age'){
        console.log(person.age);
    } else if(fieldname ==='firstName'){
        console.log(person.firstName)
    }
}
print2('age')
print2('firstName')

console.log(Object.keys(person))
console.log(Object.values(person))

console.log('##########')

for(const key of Object.keys(person)){
    print(key);
}

console.log('####### values #####');

console.log(Object.entries(person));

console.log('#########')

for(const[key,value] of Object.entries(person)){
    console.log(`for key "${key}" the value is ${value}`);
}

const person2={
    //commennts aren't allowed in json file
    firstname:'Vera',
    "lastname":"River",
    'notes':`vera is ${person.age}`// this takes the age of Matt
};

console.log(person2);

