const express = require('express');
const { getSkills, createSkill, updateSkill, deleteSkill } = require('../controllers/skillControllers');
const { verifyToken } = require('../Middlewares/authMiddleware');

const router = express.Router();

router.get("/", getSkills);
router.post("/", verifyToken, createSkill);
router.put("/:id", verifyToken, updateSkill);
router.delete("/:id", verifyToken, deleteSkill);

module.exports = router;
