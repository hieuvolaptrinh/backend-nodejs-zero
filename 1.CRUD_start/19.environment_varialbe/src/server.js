const express = require("express"); //cp,,pmjs
const path = require("path"); // path module
require("dotenv").config(); // load file .env vào môi trường

// console.log(">>>check env :  ", process);

const app = express(); // Tạo một ứng dụng Express mới
const port = process.env.PORT || 8888; // khai báo như này là mình hard code cố định, nhưng thực tế thì sẽ dùng biến môi trường
const hostname = process.env.HOSTNAME; // khai báo như này là mình hard code cố định, nhưng thực tế thì sẽ dùng biến môi trường
// coonfig template engine EJS
// app.set("view", "./views/"); // đường đẫn so với file server.js
app.set("views", path.join(__dirname, "views")); // đường dẫn so với file server.js
app.set("view engine", "ejs");
// khai báo route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hieuvo", (req, res) => {
  // res.send("đã vào được route hieuvo");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
