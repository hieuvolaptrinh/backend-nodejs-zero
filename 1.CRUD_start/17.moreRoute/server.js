const express = require("express"); //cp,,pmjs
// import express from "express"; //é modules

const app = express(); // app express
const port = 8080; //port 8080

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/abc", (req, res) => {
  res.send("đã vào được route abc");
});
app.get("/hieuvo", (req, res) => {
  res.send(`<h1>đã vào được route </h1>`);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
console.log("hello world");
