"use strict";

const Database = require("./database");

const printMessage = (message) => console.log(message);
const printStatement = (statement) => printMessage(`${statement};`);
const printError = (message) =>
  printMessage(
    `${"#".repeat(20)} Error ${"#".repeat(20)}\n` +
      `${message}\n${"#".repeat(47)}`
  );

let createStatementFile = "./createStatements.json";
let adminPass = "";

if (process.argv.length > 2) {
  adminPass = process.argv[2];
  if (process.argv.length > 3) {
    createStatementFile = `./${process.argv[3]}`;
  }
}

//console.log(createStatementFile, adminPass);

try {
  createDB(require(createStatementFile), adminPass);
} catch (error) {
  printError(error.message);
}

async function createDB(createStatements, adminPass) {
  const options = {
    host: createStatements.host,
    port: createStatements.port,
    user: createStatements.admin,
    password: adminPass,
    allowPublicKeyRetrieval: createStatements.allowPublicKeyRetrieval,
  };

  const DEBUG = createStatements.debug;
  const db = new Database(options);

  //'zion'@'127.0.0.1'
  const user = `'${createStatements.user}'@'${createStatements.host}'`;
  const dropDatabaseSql = `DROP DATABASE IF EXISTS ${createStatements.database}`;
  const createDatabaseSql = `CREATE DATABASE ${createStatements.database}`;
  const dropUserSql = `DROP USER IF EXISTS ${user}`;
  const createUserSql =
    `CREATE USER IF NOT EXISTS ${user} ` +
    `IDENTIFIED BY '${createStatements.userpassword}'`;
  const grantPrivilegesSql = `GRANT ALL PRIVILEGES ON ${createStatements.database}.* TO ${user}`;

  try {
    await db.doQuery(dropDatabaseSql);
    if (DEBUG) printStatement(dropDatabaseSql);
    await db.doQuery(createDatabaseSql);
    if (DEBUG) printStatement(createDatabaseSql);
    if (createStatements.dropUser) {
      await db.doQuery(dropUserSql);
      if (DEBUG) printStatement(dropUserSql);
    }
    await db.doQuery(createUserSql);
    if (DEBUG) printStatement(createUserSql);
    await db.doQuery(grantPrivilegesSql);
    if (DEBUG) printStatement(grantPrivilegesSql);

    for (let table of createStatements.tables) {
      if (table.columns && table.columns.length > 0) {
        const createTableSql =
          `CREATE TABLE ${createStatements.database}.${table.tableName}(` +
          `\n\t${table.columns.join(",\n\t")}` +
          `\n)`;
        await db.doQuery(createTableSql);
        if (DEBUG) printStatement(createTableSql);

        if (table.data && table.data.length > 0) {
          const rows = [];
          for (const data of table.data) {
            const insertRowSql =
              `INSERT INTO ${createStatements.database}.${table.tableName} ` +
              `VALUES(${Array(data.length).fill("?").join(",")})`;
            rows.push(db.doQuery(insertRowSql, data));
          }
          await Promise.all(rows);
          if (DEBUG) printMessage("data added");
        } else {
          if (DEBUG) printMessage("data missing");
        }
      } else {
        if (DEBUG) printMessage("Table columns missing. Table was not created");
      }
    }
  } catch (error) {
    printError(error);
  }
}
