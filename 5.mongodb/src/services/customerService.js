const {Customer} = require("../models/customer");
const aqp = require("api-query-params");
const mongoose_delete = require("mongoose-delete");
const createCustomerService = async (customerData) => {
  try {
    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      image: customerData.image,
      description: customerData.description,
    });
    return result;
  } catch (error) {
    console.log("check  error: ", error);
    return null;
  }
};
const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log("check  error: ", error);
    return null;
  }
};
const getAllCustomersService = async (limit, page, name, queryString) => {
  try {
    let results = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter } = aqp(queryString);
      delete filter.page; // xóa page trong postman mình truyền lên để không bị lỗi vì thực tế chỉ cần có limit và skip
      // const { filter, skip, limit, sort, projection, population } = aqp(req.query);
      //lấy trưc tiếp từ thư viện api-query-params cũng được không cần limmit page gì hết

      console.log("check filter: ", filter);

      results = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      results = await Customer.find({});
    }

    return results;
  } catch (error) {
    console.log("check error: ", error);
    return null;
  }
};
const putUpdateCustomersService = async (id, name, email, address) => {
  try {
    let result = Customer.updateOne({ _id: id }, { name, email, address });
    return result;
  } catch (error) {
    console.log("check error: ", error);
    return null;
  }
};
const deleteACustomerService = async (id) => {
  try {
    // let result = await Customer.deleteOne({ _id: id });
    let result = await Customer.deleteById(id);
    // let result = await Customer.findByHieuVo(id);

    return result;
  } catch (error) {
    console.log("check error: ", error);
    return null;
  }
};
const deleteArrayCustomerService = async (arrCustomer) => {
  try {
    let result = await Customer.delete({ _id: { $in: arrCustomer } }); // hàm delete này của thư viện mongoose-delete : soft delete

    return result;
  } catch (error) {
    console.log("check error: ", error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomersService,
  deleteACustomerService,
  deleteArrayCustomerService,
};
