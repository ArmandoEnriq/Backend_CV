const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  technologies: [String],
  link: String,
  github: String,
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
