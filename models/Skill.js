const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, optional: true },
  icon: { type: String}, // URL de la imagen del icono
  category: {
    type: String,
    enum: ['frontend', 'backend', 'database', 'devops', 'design', 'other'],
    default: 'other'
  },
  level: { type: Number }, // 0-100
}, { timestamps: true });

module.exports = mongoose.model("Skill", skillSchema);
