// file này dùng để test thôi
const mysql = require("mysql2");
require("dotenv").config(); // load file .env vào môi trường
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT, //default port 3306
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",  
  database: process.env.DB_NAME || "test",
});

//ẽport ra ngoài để sử dụng
module.exports = connection;
