const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));

let list = ["get new friends", "execute old friends"];

app.get("/home", function(req, res) {
  res.render("home", { list: list });
});

app.post("/ninja", function(req, res) {
  console.log(req.body.taskItem);
  list.push(req.body.taskItem);
  res.render("home.ejs", { list: list });
});

app.listen(3000, function() {
  console.log("server is up");
});
