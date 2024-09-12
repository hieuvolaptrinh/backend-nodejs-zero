const express = require("express"); // import express
const { getHomePage } = require("../controllers/homeControllers");
const {
  getUsersAPI,
  postCreateUserAPI,
  putCreateUserAPI,
  deleteUserAPI,
  postUploandSingleFile,
  postUploandMultipleFiles,
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
routerAPI.post("/file", postUploandSingleFile);
routerAPI.post("/files", postUploandMultipleFiles);

routerAPI.post("/customers", postCreateUserAPI);
module.exports = routerAPI; // export ra ngoài để sử dụng
