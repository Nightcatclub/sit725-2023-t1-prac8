let model = require("../model/model");

const createmonkeys = (req, res) => {
  //this will lead to model
  let monkey = req.body;
  model.insert(monkey, (err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, data: result, message: "Sucessfully Added" });
    }
  });
};

const getAllmonkeys = (req, res) => {
  //this will lead to model
  model.getAllmonkeys((err, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({ statusCode: 200, data: result, message: "Sucessful" });
    }
  });
};

const deletemonkey = (req, res) => {
  //this will delete monkey
  let monkey = req.body;
  model.remove(monkey, (error, result) => {
    if (err) {
      res.json({ statusCode: 400, message: err });
    } else {
      res.json({
        statusCode: 200,
        data: result,
        message: "Sucessfully removed",
      });
    }
  });
};

module.exports = { createmonkeys, getAllmonkeys, deletemonkey };
