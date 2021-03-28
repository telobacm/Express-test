const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// CREATE -> POST
router.post("/:table", productsController.createProduct);

// READ -> GET
router.get("/:table", productsController.getAllProducts);

//PUT -> UPDATE
router.put("/:table", productsController.updateProduct);
router.put("/:table/:id", productsController.updateProduct);

//DELETE -> DELETE
router.delete("/:table/:id", productsController.deleteProduct);

module.exports = router;
