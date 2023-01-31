"use strict";

const sql = require("./sqlStatements.json");

const getAllSQL = sql.getAll.join(" ");
const getOneSQL = sql.getOne.join(" ");
const insertSQL = sql.insert.join(" ");
const updateSQL = sql.update.join(" ");
const removeSQL = sql.remove.join(" ");
const PRIMARY_KEY = sql.primaryKey;

console.log(getAllSQL);
console.log(getOneSQL);
console.log(insertSQL);
console.log(updateSQL);
console.log(removeSQL);
console.log(`Primary key is`, PRIMARY_KEY);
