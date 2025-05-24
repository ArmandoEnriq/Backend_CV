const express = require('express');
const {sendMessage, getMessages} = require('../controllers/contactController');
const {verifyToken} = require('../Middlewares/authMiddleware');

const router = express.Router();

router.post("/", sendMessage); // pública
router.get("/", verifyToken, getMessages); // privada (solo dueño)

module.exports = router;
