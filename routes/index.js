const express = require("express");
const db = require("../models");
const routes = express.Router();

routes.get("/home", function(req, res) {
  db.taskItem
    .findAll({
      attributes: ["ID", "todo"]
    })
    .the(function(results) {
      console.log(results);
      res.render("home.ejs", { list: results });
    });
});

routes.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  db.taskItem
    .create({
      todo: req.body.taskItem
    })
    .then(function(results) {
      // console.log(results);
      res.render("/home");
    });
});

routes.delete("/delete/:somparam", function(req, res) {
  console.log(req.params.index);

  db.Task.destroy({ id: req.params.index }).then(function(results) {
    // console.log(results);
    res.render("/home");
  });
  res.json(list);
});

module.exports = routes;
