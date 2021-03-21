const express = require("express");

const app = express();

app.use(() => {
  console.log("Privyet Boris");
  console.log("Privyet Vadim");
  console.log("Privyet Babushka");
});

app.listen(4000);
