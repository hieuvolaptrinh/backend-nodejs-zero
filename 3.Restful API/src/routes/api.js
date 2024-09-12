const express = require("express"); // import express
const { getHomePage } = require("../controllers/homeControllers");
const {
  getUsersAPI,
  postCreateUserAPI,
  putCreateUserAPI,
  deleteUserAPI,
} = require("../controllers/apiController");
const routerAPI = express.Router();
routerAPI.get("/abc", (req, res) => {
  res.status(200).json({
    data: "trả ra dữ liệu dạng string vì nó là json",
  }); // success
});

routerAPI.get("/users", getUsersAPI); // lấy dât
routerAPI.post("/users", postCreateUserAPI); // tạo mới
routerAPI.put("/users", putCreateUserAPI); // cập nhật
routerAPI.delete("/users", deleteUserAPI); //xóa
module.exports = routerAPI; // export ra ngoài để sử dụng
