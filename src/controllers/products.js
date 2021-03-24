const fs = require("fs-extra");
const path = require("path");
const users = require("../db/users.json");

//POST -> CREATE
exports.createProduct = async (req, res) => {
  //console.log("request:", req.body);
  const sorted = await users.sort((a, b) => {
    // console.log(a.id, b.id, a.id - b.id);
    return a.id - b.id;
  });
  const newId = sorted[sorted.length - 1] ? sorted[sorted.length - 1].id + 1 : 1;
  // console.log(newId);
  users.push({ ...req.body, id: newId });
  fs.writeJSON(path.join(__dirname, "../db/users.json"), users);
  res.json(users);
};

//GET -> READ
exports.getAllProducts = (req, res) => {
  res.json(users);
};

//PUT -> UPDATE
exports.updateProduct = (req, res) => {
  // console.log("param id:", req.params.id);
  data = req.body;
  const index = users.findIndex((v) => v.id == req.params.id);
  // console.log("index", index);
  if (index > -1) {
    users[index] = { ...users[index], ...data };
    fs.writeJSON(path.join(__dirname, "../db/users.json "), users);
    res.json("1 user sudah diedit");
  }
};

//DELETE -> DELETE
exports.deleteProduct = (req, res) => {
  const index = users.findIndex((v) => v.id == req.params.id);
  if (index > -1) {
    users.splice(index, 1);
    fs.writeJson(path.join(__dirname, "../db/users.json "), users);
    res.json("1 user sudah dibuang");
  }
};
