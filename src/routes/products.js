const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// CREATE -> POST
router.post("/users", productsController.createProduct);

// READ -> GET
router.get("/users", productsController.getAllProducts);

//PUT -> UPDATE
router.put("/users/:id", productsController.updateProduct);

//DELETE -> DELETE
router.delete("/users/:id", productsController.deleteProduct);

module.exports = router;
