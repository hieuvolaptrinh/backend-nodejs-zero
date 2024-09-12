const express = require("express"); // import express

const {
  getHomePage,
  hieuvo,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
} = require("../controllers/homeControllers");
const router = express.Router(); // import router từ express

//router.method("path", handler)

// khai báo route
router.get("/", getHomePage);
router.get("/hieuvo", hieuvo);
router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);
router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);
router.post("/delete-user/:id", postDeleteUser); // get thì để bên form là method get, còn post thì để bên form là method post
router.post("/delete-user", postHandleRemoveUser);
module.exports = router; // export ra ngoài để sử dụng
