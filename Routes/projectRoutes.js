const express = require('express');
const { getProjects, createProject,updateProject, deleteProject } = require('../controllers/projectController');
const { verifyToken } = require('../Middlewares/authMiddleware');

const router = express.Router();

router.get("/", getProjects); // pública
router.post("/",verifyToken, createProject);
router.put("/:id", verifyToken, updateProject);
router.delete("/:id", verifyToken, deleteProject);

module.exports = router;
