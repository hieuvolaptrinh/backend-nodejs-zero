const express = require("express"); // import express

const {
  getHomePage,
  getABC,
  hieuvo,
  postCreateUser,
} = require("../controllers/homeControllers");
const router = express.Router(); // import router từ express

//router.method("path", handler)

// khai báo route
router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/hieuvo", hieuvo);
router.post("/create-user", postCreateUser);
module.exports = router; // export ra ngoài để sử dụng
