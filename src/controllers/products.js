const fs = require("fs-extra");
const path = require("path");
const users = require("../db/users.json");
const db = require("../db/demamberdarah.json");
var createError = require("http-errors");

const namaFile = path.join(__dirname, "../db/demamberdarah.json");

//POST -> CREATE
exports.createProduct = (req, res) => {
  let body = db[req.params.table];
  // console.log(body);
  const sorted = db[req.params.table].sort((a, b) => {
    return a.id - b.id;
  });
  const newId = sorted[sorted.length - 1] ? sorted[sorted.length - 1].id + 1 : 1;
  // console.log(newId);
  if (body) {
    body.push({ ...req.body, id: newId });
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
  if (table !== undefined) {
    res.json(table);
  } else {
    const err = createError(404, "Data mboten enten");
    res.status(err.status).json(err.message);
  }
};

//PUT -> UPDATE
exports.updateProduct = (req, res) => {
  // console.log("param table:", req.params.table);
  table = req.params.table;
  // console.log("table:", db[table]);
  data = req.body;
  const index = db[table].findIndex((v) => v.id == req.params.id);
  console.log("index", index);
  if (index > -1) {
    table[index] = { ...table[index], ...data };
    fs.writeJson(namaFile, table[index]);
    res.json(db[table]);
  } else {
    const err = createError(404, "id tidak ditemukan");
    res.status(err.status).json(err.message);
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
  } else {
    const err = createError(404, "id tidak ditemukan");
    res.status(err.status).json(err.message);
  }
};
