let client = require("../dbConnection");
let collection = client.db("test").collection("monkeys");

function insert(monkey, callback) {
  collection.insertOne(monkey, callback);
}

function getAllmonkeys(callback) {
  collection.find().toArray(callback);
}

function remove(monkey, callback) {
  collection.deleteOne(monkey, callback);
}

module.exports = { insert, getAllmonkeys, remove };
