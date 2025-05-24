const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");



const createToken = (payload) => { // Función para crear un token JWT
  if (!process.env.JWT_SECRET) throw new Error('JWT_SECRET no está definido en las variables de entorno'); // Verificar que la clave secreta JWT esté definida en las variables de entorno
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }); // Crear el token usando la informacion recibida en este caso el payload(id y email del usuario) y la clave secreta definida en las variables de entorno y establecer el tiempo de expiración del token usando la variable de entorno JWT_EXPIRES_IN
};


exports.loginAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  const admin = await Admin.findOne({ email });
  if (!admin) return res.status(401).json({ msg: "Credenciales inválidas" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(401).json({ msg: "Contraseña incorrecta" });

  
  const token = createToken({ name: admin.name, email: admin.email}); // Crear un token JWT usando la función createToken y pasando el id y el email del usuario como payload
if (!token) return res.status(500).json({ msg: 'Error al crear el token' }); // Verificar que el token se haya creado correctamente

res.cookie('token', token, { // Configurar la cookie con el token JWT
  httpOnly: true, // La cookie no es accesible desde JavaScript del lado del cliente
  secure: process.env.COOKIE_SECURE === 'true', // La cookie solo se envía a través de HTTPS si la variable de entorno COOKIE_SECURE está configurada como 'true'
  sameSite: 'strict', // La cookie solo se envía en solicitudes de la misma página
  maxAge: 24 * 60 * 60 * 1000 // La cookie expira en 24 horas
});

res.json({ msg: 'Login exitoso' });
};

