"use strict";

const mariadb = require("mariadb");

// run testA function
testA();

//helper functions

async function testA() {
  const options = {
    host: "127.0.0.1",
    port: 3306,
    user: "fuh",
    password: "Suh@123!#",
    database: "employeedb",
    allowPublicKeyRetrieval: true,
  };

  const connection = await mariadb.createConnection(options);

  let result = await connection.query("SELECT * FROM employee");
  // console.log(result);
  delete result.meta;
  console.log(result);

  console.log("######### test 2 #########");
  result = await connection.query({
    rowsAsArray: true,
    sql: "SELECT * FROM employee",
  });
  delete result.meta;
  console.log(result);

  console.log("#######test3######");
  result = await connection.query("SELECt * FROM employee WHERE id=?", [1]);
  delete result.meta;
  console.log(result);

  //close connection
  connection.end();
}
