const express = require("express");  //cp,,pmjs
// import express from "express"; //é modules

const app = express();  // app express
const port = 8080;  //port 8080


// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
