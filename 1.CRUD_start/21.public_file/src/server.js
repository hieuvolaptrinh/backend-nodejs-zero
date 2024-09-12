const express = require("express"); //cp,,pmjs
const path = require("path"); // path module
require("dotenv").config(); // load file .env vào môi trường

const app = express(); // Tạo một ứng dụng Express mới
const port = process.env.PORT || 8888; // khai báo như này là mình hard code cố định, nhưng thực tế thì sẽ dùng biến môi trường
const hostname = process.env.HOSTNAME; // khai báo như này là mình hard code cố định, nhưng thực tế thì sẽ dùng biến môi trường

app.set("views", path.join(__dirname, "views")); // đường dẫn so với file server.js
app.set("view engine", "ejs");

// config static file
app.use(express.static(path.join(__dirname, "public"))); // đường dẫn so với file server.js

// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hieuvo", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
