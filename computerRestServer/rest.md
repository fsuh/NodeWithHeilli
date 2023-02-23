# REST

mozilla developer http
https://developer.mozilla.org/en-US/docs/Web/HTTP

http methods
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

http status codes
https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## Methods

GET,
POST,
PUT,
DELETE,

OPTIONS:
HEAD,
PATCH

# Resource

for example:

```
http://localhost:4000/api/compouters
```

### GET

The GET request would be:

GET http://localhost:4000/api/computers HTTP/1.1

GET /api/computers

returns all computers as a json (or some other format) array

computer number 2

```
http://localhost:4000/api/compouters/2
```

GET /api/computers/2

returns the computer with id 2

```json
{
  "id": 2,
  "name": "Cera 2400",
  "type": "laptop",
  "processor": "Brain 456",
  "amount": 25
}
```

### POST

add a new computer

POST /api/computer

```json
{
  "id": 3,
  "name": "BMI 2",
  "type": "laptop",
  "processor": "Brain 456",
  "amount": 25
}
```

coomputer is given as json. Returns a status object

### PUT

update or add

PUT /api/computers/3

coomputer is given as json. Returns a status object.
If the computer with given number doesn't exist, it will be added. If the computer exist, then it will be updating. The id must match the number given in URI

### DELETE

remove computer

DELETE /api/computers/2

deletes computer number 2 and returns a status object or error message.

# JavaScript (fetch)

let's assume 'cors' situation:

### GET

```js
const option={
    method:'GET',
    mode:'cors'
}

const allComputers ='http://localhost:4000/api/computers'
const oneComputer ='http://localhost:4000/api/computers/2'
const data=await fetch(oneComputer, options);
const result = await data.json();

const data2=await fetch(allComputers, {mode:'cors'}) // GET is default
const result2 = await data2.json()
```

### POST and PUT

```js

const computerObject={
  id:3,
  "name":"BMI 2",
  "type":"Laptop",
  "processor": "Brain 456",
  "amount":25
}

const option={
    method:'POST',
    mode:'cors',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(computerObject)
}

const postComputers ='http://localhost:4000/api/computers'

const data=await fetch(postComputer, options);
const result = await data.json();

const putoption={
     method:'POST',
    mode:'cors',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(computerObject)
}

const postComputer ='http://localhost:4000/api/computers/2'
const data2=await fetch(postComputer, {mode:'cors'})
const result2 = await data2.json()

```

### DELETE

```js
const options = {
  method: "DELETE",
  mode: "cors",
};

const oneComputer = "http://localhost:4000/api/computers/2";
const data = await fetch(oneComputer, options);
const result = await data2.json();
```
