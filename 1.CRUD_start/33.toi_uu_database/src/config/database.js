const mysql = require("mysql2");
require("dotenv").config(); // load file .env vào môi trường
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST || "localhost",
//   port: process.env.DB_PORT, //default port 3306
//   user: process.env.DB_USER || "root",
//   password: process.env.DB_PASSWORD || "123456",  
//   database: process.env.DB_NAME || "test",
// });
const connection = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT, //default port 3306
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",  
  database: process.env.DB_NAME || "test",
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
//ẽport ra ngoài để sử dụng
module.exports = connection;
