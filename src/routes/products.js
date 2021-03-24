const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");
const users = require("../db/users.json");
const fs = require("fs-extra");
const path = require("path");

// CREATE -> POST
router.post("/users", productsController.createProduct);

// READ -> GET
router.get("/users", productsController.getAllProducts);

module.exports = router;
