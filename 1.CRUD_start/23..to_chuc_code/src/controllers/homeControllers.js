const getHomePage = (req, res) => {
  res.send("Hello World! hiếu võ");
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
