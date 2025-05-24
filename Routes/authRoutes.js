const express = require("express");
const { loginAdmin } = require("../controllers/authController");
const { verifyToken } = require("../Middlewares/authMiddleware"); // Importa el middleware

const router = express.Router();
router.post("/login", loginAdmin);

// Usa verifyToken para proteger esta ruta
router.get("/check-auth", verifyToken, (req, res) => {
    return res.status(200).json({ message: "Authenticated" });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token"); // Limpia la cookie del token JWT
  return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = router;
