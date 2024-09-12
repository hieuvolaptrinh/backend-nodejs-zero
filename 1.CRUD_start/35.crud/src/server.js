require("dotenv").config(); // load file .env vào môi trường
const express = require("express"); //cp,,pmjs

const configViewEngine = require("./config/viewEngine");
const wedRoutes = require("./routes/web");

const app = express(); // Tạo một ứng dụng Express mới
const port = process.env.PORT || 8888; // khai báo như này là mình hard code cố định, nhưng thực tế thì sẽ dùng biến môi trường
const hostname = process.env.HOSTNAME;

const connection = require("./config/database");

// config req
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

// khai báo route
app.use("/", wedRoutes);

// simple query
connection.query("SELECT * FROM Users", function (err, results, fields) {
  console.log(">>>>>>>>>>results ...: ", results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
