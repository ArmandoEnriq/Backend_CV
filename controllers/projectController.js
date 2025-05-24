const Project = require('../models/Project');

exports.getProjects = async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
};

exports.createProject = async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.status(201).json(newProject);
};

exports.updateProject = async (req, res) => {
  const updatedProject = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProject);
}

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ msg: "Proyecto eliminado" });
};