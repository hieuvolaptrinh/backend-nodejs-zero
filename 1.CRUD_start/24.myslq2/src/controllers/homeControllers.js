const connection = require("../config/database");

const getHomePage = (req, res) => {
  let users = [];
  connection.query("SELECT * FROM Users", function (err, results, fields) {
    users = results;
    console.log(">>>>>>>>>>results : ", results); // results contains rows returned by server
    // console.log("check user : ", users);
    res.send(JSON.stringify(users));
  });
};
const getABC = (req, res) => {
  res.send("ABC");
};

const hieuvo = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomePage,
  getABC,
  hieuvo,
};
