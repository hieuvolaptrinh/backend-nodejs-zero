require("dotenv").config(); // load file .env vào môi trường
const express = require("express"); //cp,,pmjs

const configViewEngine = require("./config/viewEngine");
const wedRoutes = require("./routes/web");
const apiRoutes = require("./routes/api");
const app = express(); // Tạo một ứng dụng Express mới
const port = process.env.PORT || 8888;
const hostname = process.env.HOSTNAME || "localhost";
const connection = require("./config/database");
const { MongoClient } = require("mongodb");
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
    // using mongoose
    await connection();

    // using mongodb driver
    // connection URL
    const url = process.env.DB_HOST;
    const client = new MongoClient(url);
    // database Name
    const dbName = process.env.DB_NAME;

    // Use connect method to connect to the server
    await client.connect();
    console.log("connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("customers");

  collection.insertOne({
      name: "hiếu võ",
      address:[1,2]
    });
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening at http://localhost:${port} `);
    });
  } catch (error) {
    console.log(">>> error connect to Database  : ", error);
  }
})();
