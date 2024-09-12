require("dotenv").config(); // load file .env vào môi trường
const express = require("express"); //cp,,pmjs

const configViewEngine = require("./config/viewEngine");
const wedRoutes = require("./routes/web");

const app = express(); // Tạo một ứng dụng Express mới
const port = process.env.PORT || 8888; // khai báo như này là mình hard code cố định, nhưng thực tế thì sẽ dùng biến môi trường
const hostname = process.env.HOSTNAME;

//config template engine
configViewEngine(app);

// khai báo route
app.use("/", wedRoutes);


app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
