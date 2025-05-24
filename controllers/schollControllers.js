const Education = require("../models/School");

exports.getEducations = async (req, res) => {
  const educations = await Education.find().sort({ startDate: -1 }); // Ordena por fecha más reciente
  res.json(educations);
};

exports.getEducation = async (req, res) => {
  const education = await Education.findById(req.params.id);
  res.json(education);
};

exports.createEducation = async (req, res) => {
  const newEducation = new Education(req.body);
  await newEducation.save();
  res.status(201).json(newEducation);
};

exports.updateEducation = async (req, res) => {
  const updatedEducation = await Education.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true } // Devuelve el documento actualizado
  );
  res.json(updatedEducation);
};

exports.deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ msg: "Educación eliminada" });
};