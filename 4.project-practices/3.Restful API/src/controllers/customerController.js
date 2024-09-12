const { uploadSingleFile } = require("../services/fileService");
// phải viết theo chuẩn 1 object {key:value}
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, image, description } = req.body; // destructuring object js

    let imageUrl = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      // do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      console.log("check result: ", result);
    }

    return res.send("Create new customer");
  },
};
