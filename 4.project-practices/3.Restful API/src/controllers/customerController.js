const { uploadSingleFile } = require("../services/fileService");
const {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomersService,
  deleteACustomerService,
  deleteArrayCustomerService,
} = require("../services/customerService");

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
  postCreateArrayCustomer: async (req, res) => {
    console.log("check req.body: ", req.body);

    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        errorCode: 0,
        data: customers,
      });
    } else {
      return res.status(200).json({
        errorCode: -1,
        data: customers,
      });
    }
  },
  getAllCustomers: async (req, res) => {
    console.log("check req.query: ", req.query);
    let limit = req.query.limit;
    let page = req.query.page;

    let name = req.query.name;
    let result = null;
    if (limit && page) {
      result = await getAllCustomersService(limit, page, name);
    } else result = await getAllCustomersService();

    if (result) {
      return res.status(200).json({
        errorCode: 0,
        data: result,
      });
    } else {
      return res.status(200).json({
        errorCode: -1,
        data: result,
      });
    }
  },
  putUpdateCustomers: async (req, res) => {
    let { id, name, email, address } = req.body;
    let result = await putUpdateCustomersService(id, name, email, address);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteACustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteACustomerService(id);
    res.status(200).json({
      errorCode: 0,
      data: result,
    });
  },
  deleteArrayCustomer: async (req, res) => {
    let ids = req.body.customersId;
    console.log("check ids: ", ids);

    let result = await deleteArrayCustomerService(ids);
    console.log("check result: ", result);
    if (result) {
      res.status(200).json({
        errorCode: 0,
        data: result,
      });
    } else {
      res.status(200).json({
        errorCode: -1,
        data: result,
      });
    }
  },
};
