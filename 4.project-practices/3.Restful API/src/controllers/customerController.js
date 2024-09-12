const { uploadSingleFile } = require("../services/fileService");
const { createCustomerService } = require("../services/customerService");

//  viết theo chuẩn 1 object {key:value}
module.exports = {
  postCreateCustomer: async (req, res) => {
    let { name, address, phone, email, description } = req.body; // destructuring object js

    let imageUrl = "";

    if (!req.files || Object.keys(req.files).length === 0) {
      // do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
      console.log("check path result: ", result.path);
    }

    let customerData = {
      name,
      address,
      phone,
      email,
      image: imageUrl,
      description,
    };

    let customer = await createCustomerService(customerData);
    // để biến thành 1 API
    return res.status(200).json({
      errorCode: 0,
      data: customer,
    });
  },
};
