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
module.exports = {
  createCustomerService,
};
