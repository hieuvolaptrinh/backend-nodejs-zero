const connection = require("../config/database");

const getHomePage = (req, res) => {
  return res.render("home.ejs");
};
const getABC = (req, res) => {
  res.send("ABC");
};

const hieuvo = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  console.log(">>>> req", req.body);


  res.send("tạo mới thành công");
};
module.exports = {
  getHomePage,
  getABC,
  hieuvo,
  postCreateUser,
};
