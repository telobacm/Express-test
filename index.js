const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoutes = require("./src/routes/products");
// const error = require("");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", productRoutes);

app.listen(3007);
