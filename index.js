const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const productRoutes = require("./src/routes/products");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", productRoutes);

app.listen(3007);
