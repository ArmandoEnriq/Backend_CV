const mongoose = require("mongoose");

const contactInfoSchema = new mongoose.Schema({
  email: String,
  phone: String,
  location: String,
  linkedin: String,
  github: String,
  portfolio: String,
  about: String,
}, { timestamps: true });

module.exports = mongoose.model("ContactInfo", contactInfoSchema);
