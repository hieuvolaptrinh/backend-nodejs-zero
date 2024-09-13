const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
    // lưu trữ file thì mình sử dụng buffer < 16mb, gridfs( file system)
  },
  { timestamps: true }
);
const Customer = mongoose.model("Customer", customerSchema);
// const silence = new Kitten({ name: "hoi dan it cat" });
// silence.save();
module.exports = Customer;
