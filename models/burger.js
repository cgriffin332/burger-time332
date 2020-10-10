// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  // get all
  selectAll: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
  // add one
  insertOne: (cols, vals, cb) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  // update
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  //delete
  deleteOne: (condition, cb) => {
    orm.deleteOne("burgers", condition, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller.
module.exports = burger;
