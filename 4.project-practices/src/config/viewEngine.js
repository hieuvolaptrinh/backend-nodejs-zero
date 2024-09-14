const path = require("path");
const express = require("express"); // import express
const configViewEngine = (app) => {
  console.log("địa chỉ ", __dirname);

  app.set("views", path.join("./src", "views")); // đường dẫn so với file server.js
  app.set("view engine", "ejs");
  // config static file

  console.log("địa chỉ static: ", path.join("./src", "public"));

  app.use(express.static(path.join("./src", "public"))); // đường dẫn so với file server.js
};

module.exports = configViewEngine; //export ra ngoài để sử dụng
