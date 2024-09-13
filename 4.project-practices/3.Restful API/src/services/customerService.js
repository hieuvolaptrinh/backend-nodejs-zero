const Customer = require("../models/customer");
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
const getAllCustomersService = async () => {
  try {
    let results = await Customer.find({});

    return results;
  } catch (error) {
    console.log("check error: ", error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomersService,
};
