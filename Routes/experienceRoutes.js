const express = require('express');
const {getExperiences, getExperience, createExperience, updateExperience, deleteExperience} = require('../controllers/experienceControllers');
const { verifyToken } = require('../Middlewares/authMiddleware');

const router = express.Router();

router.get("/", getExperiences); // pública
router.post("/", verifyToken, createExperience);
router.get("/:id", getExperience); // pública
router.put("/:id", verifyToken, updateExperience);
router.delete("/:id", verifyToken, deleteExperience);
module.exports = router;