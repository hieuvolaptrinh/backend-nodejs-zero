const mongoose = require("mongoose");

// shape dâta
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  city: String,
});
const User = mongoose.model("user", userSchema);
// const silence = new Kitten({ name: "hoi dan it cat" });
// silence.save();
module.exports = User;
