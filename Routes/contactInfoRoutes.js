const express = require('express');
const {getContactInfo, updateContactInfo, createContactInfo} = require('../controllers/contactInfoControllers');
const {verifyToken} = require('../Middlewares/authMiddleware');

const router = express.Router();

router.post("/", verifyToken, createContactInfo); // privada (solo admin)
router.get("/", getContactInfo); // pública
router.put("/", verifyToken, updateContactInfo); // privada (solo admin)

module.exports = router;
