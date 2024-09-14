require("dotenv").config(); // load file .env vào môi trường
const express = require("express"); //cp,,pmjs

const configViewEngine = require("./config/viewEngine");
const wedRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const app = express(); // Tạo một ứng dụng Express mới
const port = process.env.PORT || 8888; // khai báo như này là mình hard code cố định, nhưng thực tế thì sẽ dùng biến môi trường
const hostname = process.env.HOSTNAME;

const connection = require("./config/database");

// inport thư viện express-upload file
const fileUpload = require("express-fileupload");

//config template engine
configViewEngine(app);
// config request body data
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// comfig file upload
app.use(fileUpload());
// khai báo route
app.use("/", wedRoutes);
app.use("/v1/api/", apiRoutes);
// test connection

connection();

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening at http://localhost:${port} `);
    });
  } catch (error) {
    console.log(">>> error connect to Database  : ", error);
  }
})();

// app.listen(port, hostname, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
