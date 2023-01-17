# Database Class

This database class is a general purpose class for creating and using Mariadb/MySql queries. The constructor takes all necessary information needed to open a database connection as parameter object. This layer is used between the database engine and our application.

Here is the option object for constructor;

```js
{
    host:'localhost',
    port:3306,
    user: 'username'
    password:'password'
    database:'database name'
}
```

## Method **doQuery(sql, parameters)**

### Method usage

```js
const result = await db.doQuery('SELECT * FROM employee');
```

```js
const result = await db.doQuery('SELECT * FROM employee WHERE id=?,' [1]);
```

Select queries will return a promise with a result as javascript object: for example

```js
{
    queryResult:[
        {
            id:1,
            firstname:'Matt',
            lastname:'River',
        }
    ],
    resultSet:true
}
```

for example an insert statement will return an object:

```js
const result=await db.doQuery('INSERT INTO employee VALUES(?,?,?,?,)´, 
[123, 'Vera', 'River', 'ict', 6000]);
```

The statement to be sent to database engine will be: INSERT INTO employee VALUES(123, 'vera', 'River', 'ict', 6000);

will return a promise with an object:

```js
{
    queryResult:{rowsChanged:1, insertID:0, status:0},
    resultSet:false
}
```

In error case, it rejects an error-string