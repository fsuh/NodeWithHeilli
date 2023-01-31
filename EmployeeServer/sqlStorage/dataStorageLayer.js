"use strict";

const Database = require("./database");
const options = require("./databaseOptions.json");

const sql = require("./sqlStatements.json");

const getAllSQL = sql.getAll.join(" ");
const getOneSQL = sql.getOne.join(" ");
const insertSQL = sql.insert.join(" ");
const updateSQL = sql.update.join(" ");
const removeSQL = sql.remove.join(" ");
const PRIMARY_KEY = sql.primaryKey;

const { CODES, MESSAGES } = require("./statusCodes");

const { insertParameters, updateParameters } = require("./parameterFunctions");

//Datastorage class

module.exports = class Datastorage {
  constructor() {
    this.db = new Database(options);
  }

  get CODES() {
    return CODES;
  }

  getAll() {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.db.doQuery(getAllSQL);
        resolve(result.queryResult);
      } catch (err) {
        reject(MESSAGES.PROGRAM_ERROR());
      }
    });
  } //end getAll

  getOne(id) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!id) {
          reject(MESSAGES.NOT_FOUND("---empty---"));
        } else {
          const result = await this.db.doQuery(getOneSQL, [id]);
          if (result.queryResult.length > 0) {
            resolve(result.queryResult[0]);
          } else {
            reject(MESSAGES.NOT_FOUND(id));
          }
        }
      } catch (err) {
        reject(MESSAGES.PROGRAM_ERROR());
      }
    });
  } //end of getOne

  insert(employee) {
    return new Promise(async (resolve, reject) => {
      try {
        if (employee) {
          if (!employee.id) {
            reject(MESSAGES.NOT_INSERTED());
          } else {
            const result = await this.db.doQuery(getOneSQL, [employee.id]);
            if (result.queryResult.length > 0) {
              reject(MESSAGES.ALREADY_IN_USE(employee.id));
            } else {
              await this.db.doQuery(insertSQL, insertParameters(employee));
              resolve(MESSAGES.INSERT_OK(employee.id));
            }
          }
        } else {
          reject(MESSAGES.NOT_INSERTED());
        }
      } catch (err) {
        reject(MESSAGES.NOT_INSERTED());
      }
    });
  } //end of insert

  update(employee) {
    return new Promise(async (resolve, reject) => {
      try {
        if (employee) {
          const status = await this.db.doQuery(
            updateSQL,
            updateParameters(employee)
          );
          console.log(status);
          if (status.queryResult.rowsChanged > 0) {
            resolve(MESSAGES.UPDATE_OK(employee.id));
          } else {
            reject(MESSAGES.NOT_UPDATED());
          }
        }
      } catch (err) {
        console.log(err);
        reject(MESSAGES.NOT_UPDATED());
      }
    });
  } //end update

  remove(id) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!id) {
          reject(MESSAGES.NOT_FOUND("---empty---"));
        } else {
          const status = await this.db.doQuery(removeSQL, [id]);
          if (status.queryResult.rowsChanged > 0) {
            resolve(MESSAGES.REMOVE_OK(id));
          } else {
            reject(MESSAGES.NOT_REMOVED(id));
          }
        }
      } catch (err) {
        reject(MESSAGES.PROGRAM_ERROR());
      }
    });
  } //end of remove
};
