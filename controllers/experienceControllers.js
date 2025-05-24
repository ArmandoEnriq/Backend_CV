const Experience = require("../models/Experience");

exports.getExperiences = async (req, res) => {
  const experiences = await Experience.find().sort({ startDate: -1 }); // Ordena por la más reciente
  res.json(experiences);
};

exports.getExperience = async (req, res) => {
  const experience = await Experience.findById(req.params.id);
  res.json(experience);
};

exports.createExperience = async (req, res) => {
  // Validación mínima de campos requeridos
  if (!req.body.company || !req.body.position || !req.body.location) {
    return res.status(400).json({ error: "Company, position and location are required" });
  }

  const newExperience = new Experience(req.body);
  await newExperience.save();
  res.status(201).json(newExperience);
};

exports.updateExperience = async (req, res) => {
  const updatedExperience = await Experience.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } // Retorna el documento actualizado
  );
  res.json(updatedExperience);
};

exports.deleteExperience = async (req, res) => {
  await Experience.findByIdAndDelete(req.params.id);
  res.json({ msg: "Experience deleted successfully" });
};