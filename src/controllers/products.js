const fs = require("fs-extra");
const path = require("path");
const users = require("../db/users.json");

//POST -> CREATE
exports.createProduct = (req, res, next) => {
  // console.log("request:", req.body);
  const { id } = req.params;
  console.log(id);
  users.push(req.body, id);
  // fs.writeJSON(path.join(__dirname, "../db/users.json"), users);
  // res.json({ users });
  next();
};

//GET -> READ
exports.getAllProducts = (req, res, next) => {
  res.json({ users });
  next();
};
