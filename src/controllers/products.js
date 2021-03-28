const fs = require("fs-extra");
const path = require("path");
const users = require("../db/users.json");
const db = require("../db/demamberdarah.json");

const namaFile = path.join(__dirname, "../db/demamberdarah.json");

//POST -> CREATE
exports.createProduct = (req, res) => {
  let body = db[req.params.table];
  console.log(body);
  if (body) {
    body.push(req.body);
  } else {
    body = [req.body];
  }
  const datas = Object.assign(db, { [req.params.table]: body });
  fs.writeJson(namaFile, datas);
  res.json(datas);
};

//GET -> READ
exports.getAllProducts = (req, res) => {
  // console.log(req.params.table);
  const table = db[req.params.table];
  if (table == undefined) {
    res.status(500).send("tabel tidak ditemukan");
  }
  res.json(table);
};

//PUT -> UPDATE
exports.updateProduct = (req, res) => {
  // // console.log("param id:", req.params.id);
  data = req.body;
  const index = db[req.params.table].findIndex((v) => v.id == req.params.id);
  // // console.log("index", index);
  if (index > -1) {
    users[index] = { ...users[index], ...data };
    fs.writeJson(namaFile, users);
    res.json(db);
  }
};

//DELETE -> DELETE
exports.deleteProduct = (req, res) => {
  const payload = db[req.params.table];
  const index = payload.findIndex((v) => v.id == req.params.id);
  if (index > -1) {
    payload.splice(index, 1);
    const datas = Object.assign(db, { [req.params.table]: payload });
    fs.writeJson(namaFile, db);
    res.json(datas);
  }
};
