const User = require("../models/User");

const getUsersAPI = async (req, res) => {
  let results = await User.find({});

  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const postCreateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  // let { email, name, city } = req.body;
  console.log(">> name :", name, " email :", email, " city  :", city);

  const user = await User.create({
    email,
    name,
    city,
  });
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const putCreateUserAPI = async (req, res) => {
  let userId = req.body.userId;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  const user = await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const deleteUserAPI = async (req, res) => {
  let userId = req.body.userId;
  let result = await User.deleteOne({ _id: userId });
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};
module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putCreateUserAPI,
  deleteUserAPI,
};
