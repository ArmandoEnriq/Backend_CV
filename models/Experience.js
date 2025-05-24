const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    position: { type: String, required: true },
    location: { type: String, required: true },
    logo: { type: String }, // URL de la imagen del logo
    startDate: Date,
    endDate: Date,
    description: [{ type: String }], // Ahora es un array de strings (listado de actividades)
}, { timestamps: true });

module.exports = mongoose.model("Experience", experienceSchema);
