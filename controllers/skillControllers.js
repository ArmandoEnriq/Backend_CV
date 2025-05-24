const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
  const skills = await Skill.find().sort({ createdAt: -1 });
  res.json(skills);
};

exports.createSkill = async (req, res) => {
  const newSkill = new Skill(req.body);
  await newSkill.save();
  res.status(201).json(newSkill);
};

exports.updateSkill = async (req, res) => {
  const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedSkill);
};

exports.deleteSkill = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ msg: "Skill eliminada" });
};
