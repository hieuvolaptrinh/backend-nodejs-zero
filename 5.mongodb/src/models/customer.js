const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
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
  {
    timestamps: true,
    // statics: {
    //   findByHieuVo(name) {
    //     return this.find({ name: new RegExp(name, "i") });
    //   },
    //   findByHoiDanIt(name) {
    //     return this.find({ name: new RegExp(name, "i") });
    //   },
    // },
  }
);
customerSchema.plugin(mongoose_delete, { overrideMethods: "all" }); // soft delete

const Customer = mongoose.model("Customer", customerSchema);
// const silence = new Kitten({ name: "hoi dan it cat" });
// silence.save();
module.exports = { Customer, customerSchema };
// module.exports = customerSchema; // Xuất schema, không xuất model
