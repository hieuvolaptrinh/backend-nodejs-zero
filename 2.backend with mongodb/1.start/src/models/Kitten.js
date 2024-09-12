const mongoose = require("mongoose");

// shape dâta
const kittySchema = new mongoose.Schema({
  name: String,
});
const Kitten = mongoose.model("Kitty", kittySchema);
// const silence = new Kitten({ name: "hoi dan it cat" });
// silence.save();
module.exports = Kitten;