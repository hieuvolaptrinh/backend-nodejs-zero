const {User} = require("../models/User");
const {
  uploadSingleFile,
  uploandMultipleFiles,
} = require("../services/fileService");
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
const postUploandSingleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  let result = await uploadSingleFile(req.files.image);

  console.log("check result ....: ", result);

  res.send("upload  single file");
};
const postUploandMultipleFiles = async (req, res) => {
  if (!req.files || Object.keys(req.files).length == 0) {
    res.status(400).send("No files were uploaded.");
  }
  // upload multiple files => array
  // upload singlee file => object
  if (Array.isArray(req.files.image)) {
    let result = await uploandMultipleFiles(req.files.image);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  } else {
    let result = await uploandSingle(req.files.image);
  }
};
module.exports = {
  getUsersAPI,
  postCreateUserAPI,
  putCreateUserAPI,
  deleteUserAPI,
  postUploandSingleFile,
  postUploandMultipleFiles,
};
