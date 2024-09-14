const mongoose = require("mongoose");
require("dotenv").config(); // load file .env vào môi trường
//
const dbState = [
  { value: 0, label: "disconnected" },
  { value: 1, label: "connected" },
  { value: 2, label: "connecting" },
  { value: 3, label: "disconnecting" },
];
//

const connection = async () => {
  const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    dbname: process.env.DB_NAME,
  };
  try {
    // Kết nối đến MongoDB với database `hoidanit` và authSource `admin`
    await mongoose.connect(`${process.env.DB_HOST}?authSource=admin`, options);
    // kết nôi như này thì không được mongodb://root:123456@127.0.0.1:27017 ( phải thêm authSource=admin)
    // Kiểm tra trạng thái kết nối
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value === state).label, "to db"); // connected to db
  } catch (error) {
    console.log(">>> error connection : ", error);
  }
};
module.exports = connection;
