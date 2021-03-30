const express = require("express");
const router = express.Router();
const { checkAuth } = require("./chkAuth");
const productsController = require("../controllers/products");

// CREATE -> POST
router.post("/:table", checkAuth, productsController.createProduct);

// READ -> GET
router.get("/:table", checkAuth, productsController.getAllProducts);

//PUT -> UPDATE
router.put("/:table", checkAuth, productsController.updateProduct);
router.put("/:table/:id", checkAuth, productsController.updateProduct);

//DELETE -> DELETE
router.delete("/:table/:id", checkAuth, productsController.deleteProduct);

module.exports = router;
