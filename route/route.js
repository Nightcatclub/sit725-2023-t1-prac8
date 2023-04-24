var express = require("express");
let router = express.Router();
let controller = require("../controller/controller");

router.post("/api/monkeys", (req, res) => {
  controller.createmonkeys(req, res);
});

router.get("/api/monkeys", (req, res) => {
  controller.getAllmonkeys(req, res);
});

module.exports = router;
