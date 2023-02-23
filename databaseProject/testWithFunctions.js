"use strict";

const Database = require("./database");

const options = {
  host: "127.0.0.1",
  port: 3306,
  user: "fuh",
  password: "Suh@123!#",
  database: "employeedb",
  allowPublicKeyRetrieval: true,
};

const db = new Database(options);

run();

// functions

function printWorkers(employee) {
  for (const person of employee) {
    console.log(
      `${person.id}: ${person.firstname} ${person.lastname} ` +
        ` Dept: ${person.department}, ${person.salary}`
    );
  }
}

async function getAll() {
  try {
    const result = await db.doQuery("SELECt * FROM employee");
    if (result.resultSet) {
      printWorkers(result.queryResult);
    }
  } catch (err) {
    console.log(err);
  }
}

async function getOne(id) {
  try {
    const result = await db.doQuery("SELECT * FROM employee WHERE id=?", [id]);
    if (result.queryResult.length > 0) {
      printWorkers(results.queryResult);
    } else {
      console.log(`No employee found with id=${id}`);
    }
  } catch (err) {
    console.log(err);
  }
}

async function add(employee) {
  try {
    const parameters = [
      employee.id,
      employee.firstname,
      employee.lastname,
      employee.department,
      employee.salary,
    ];
    const sql = "INSERT INTO employee VALUES(?,?,?,?,?)";
    const status = await db.doQuery(sql, parameters);
    console.log(status);
  } catch (err) {
    console.log(err);
  }
}

async function remove(id) {
  try {
    const status = await db.doQuery("DELETE FROM employee WHERE id=?"[id]);
    console.log(status);
  } catch (err) {
    console.log(err);
  }
}

async function update(modifiedEmployee) {
  try {
    const sql =
      "UPDATE employee SET firstname=?, lastname=?, " +
      "department=?, salary=? WHERE id=?";

    const parameters = [
      modifiedEmployee.firstname,
      modifiedEmployee.lastname,
      modifiedEmployee.department,
      modifiedEmployee.department,
      modifiedEmployee.salary,
      modifiedEmployee.id,
    ];

    const status = await db.doQuery(sql, parameters);
    console.log(status);
  } catch (err) {
    console.log(err);
  }
}

// main function

async function run() {
  await getAll();
  console.log("############ getOne ###############");
  await getOne(12);
  console.log("########## add ##############");
  await add({
    id: 203,
    firstname: "James",
    lastname: "Bond",
    department: "Maintenance",
    salary: 4000,
  });
  console.log("####### remove##########");
  await remove(200);
  console.log("######## update ############");
  await update({
    id: 203,
    firstname: "JamesX",
    lastname: "BondX",
    department: "MaintenanceX",
    salary: 4999,
  });

  console.log("######## get all ##############");
  await getAll();
}
