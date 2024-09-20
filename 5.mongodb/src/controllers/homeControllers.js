const connection = require("../config/database");
const {
  getAllUsers,
  getUserByID,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");
const { get } = require("../routes/web");
const { User } = require("../models/User");

const getHomePage = async (req, res) => {
  // let [results, fields] = await connection.query("SELECT * FROM Users"); // đưa nó qua CRUDService

  let results = await User.find({});
  console.log(">>>>>>>>>>results: ", results);
  return res.render("home.ejs", { listUsers: results }); // lấy giá trị results truyền vào listUser
};

const hieuvo = (req, res) => {
  res.render("sample.ejs");
};
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // let { email, name, city } = req.body;
  console.log(">> name :", name, " email :", email, " city  :", city);

  await User.create({
    email,
    name,
    city,
  });
  res.send("Create user success");
};
const getCreatePage = (req, res) => {
  res.render("create.ejs");
};
const getUpdatePage = async (req, res) => {
  const userId = req.params.id; // lấy giá trị id từ url
  let user = await User.findById(userId).exec(); // findById phải truyền vào chuỗi

  res.render("edit.ejs", { userEdit: user }); // truyền vào userEdit
};
const postUpdateUser = async (req, res) => {
  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // let { email, name, city } = req.body;

  console.log(
    "name :",
    name,
    " email :",
    email,
    "city :",
    city,
    " User ID: ",
    userId
  );
  // await updateUserById(userId, email, name, city);
  await User.updateOne({ _id: userId }, { email, name, city });
  // console.log(">>>>>>>>>>results ...: ", results);

  res.redirect("/");
};
const postDeleteUser = async (req, res) => {
  const userId = req.params.id; // lấy giá trị id từ url
  // console.log(">> req.params: ", req.params,userId); //params là một object chứa các giá trị truyền vào

  const user = await User.findById(userId).exec();

  res.render("delete.ejs", { userEdit: user });
};
const postHandleRemoveUser = async (req, res) => {
  let id = req.body.userId;
  // await deleteUserById(id);
  // thử hứng kết quả trươc khi xóa
  let result = await User.deleteOne({ _id: id });
  console.log(">>>>>>>>>>result: ", result);
  res.redirect("/");
};
module.exports = {
  getHomePage,
  hieuvo,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandleRemoveUser,
};
