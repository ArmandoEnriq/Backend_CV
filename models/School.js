const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  title: { type: String, required: true }, 
  institution: { type: String, required: true },
  degree: String,
  startDate: Date,
  endDate: Date,
  description: String,
}, { timestamps: true });

module.exports = mongoose.model("Education", educationSchema);



