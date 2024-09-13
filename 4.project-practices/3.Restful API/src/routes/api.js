const express = require("express"); // import express
const { getHomePage } = require("../controllers/homeControllers");
const routerAPI = express.Router();
const {
  getUsersAPI,
  postCreateUserAPI,
  putCreateUserAPI,
  deleteUserAPI,
  postUploandSingleFile,
  postUploandMultipleFiles,
} = require("../controllers/apiController");

const {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomers
} = require("../controllers/customerController");

routerAPI.get("/users", getUsersAPI); // lấy dât
routerAPI.post("/users", postCreateUserAPI); // tạo mới
routerAPI.put("/users", putCreateUserAPI); // cập nhật
routerAPI.delete("/users", deleteUserAPI); //xóa
routerAPI.post("/file", postUploandSingleFile);
routerAPI.post("/files", postUploandMultipleFiles);

routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomers);
module.exports = routerAPI; // export ra ngoài để sử dụng
