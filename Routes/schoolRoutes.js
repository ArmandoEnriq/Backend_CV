const express = require('express');
const {getEducations, createEducation, updateEducation, deleteEducation} = require('../controllers/schollControllers');
const { verifyToken } = require('../Middlewares/authMiddleware');

const router = express.Router();

router.get("/", getEducations); // pública
router.post("/", verifyToken, createEducation);
router.put("/:id", verifyToken, updateEducation);
router.delete("/:id", verifyToken, deleteEducation);

module.exports = router; 