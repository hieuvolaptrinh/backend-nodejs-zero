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
  getAllCustomers,
  putUpdateCustomers,
  deleteACustomer,
  deleteArrayCustomer,
} = require("../controllers/customerController");

const {
  postCreateProject,
  getAllProjects,
  deleteAProject,
  putUpdateProjects,
} = require("../controllers/projectController");
const {
  getTasks,
  postCreateTasks,
  putUpdateTasks,
  deleteTasks,
} = require("../controllers/taskController");
routerAPI.get("/users", getUsersAPI); // lấy dât
routerAPI.post("/users", postCreateUserAPI); // tạo mới
routerAPI.put("/users", putCreateUserAPI); // cập nhật
routerAPI.delete("/users", deleteUserAPI); //xóa
routerAPI.post("/file", postUploandSingleFile);
routerAPI.post("/files", postUploandMultipleFiles);
// customer
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-many", postCreateArrayCustomer);
routerAPI.get("/customers", getAllCustomers);
routerAPI.put("/customers", putUpdateCustomers);
routerAPI.delete("/customers", deleteACustomer);
routerAPI.delete("/customers-many", deleteArrayCustomer);

routerAPI.get("/infor", (req, res) => {
  console.log("check query", req.query);
  return res.status(200).json({
    data: req.query,
  });
});

routerAPI.get("/infor/:name/:address", (req, res) => {
  console.log("check req params", req.params);
  return res.status(200).json({
    data: req.params,
  });
});
// project
routerAPI.post("/projects", postCreateProject);
routerAPI.get("/projects", getAllProjects);
routerAPI.delete("/projects", deleteAProject);
routerAPI.put("/projects", putUpdateProjects);

// task
routerAPI.get("/tasks", getTasks);
routerAPI.post("/tasks", postCreateTasks);
routerAPI.put("/tasks", putUpdateTasks);
routerAPI.delete("/tasks", deleteTasks);
module.exports = routerAPI; // export ra ngoài để sử dụng
