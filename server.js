const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser'); // Importar cookie-parser para manejar cookies
const helmet = require('helmet'); // Importar helmet para mejorar la seguridad de las cabeceras HTTP
const projectRoutes = require('./Routes/projectRoutes');
const authRoutes = require('./Routes/authRoutes');
const contactRoutes = require('./Routes/contactRoutes');
const experienceRoutes = require('./Routes/experienceRoutes');
const skillRoutes = require('./Routes/skillRoutes');
const schoolRoutes = require('./Routes/schoolRoutes');
const contactInfoRoutes = require('./Routes/contactInfoRoutes');



dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Cambia esto a la URL de tu frontend
  credentials: true // Si usas cookies o autenticación
}));
app.use(helmet()); // Usar helmet para proteger las cabeceras HTTP
app.use(cookieParser()); // Usar cookie-parser para manejar cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Para form data

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🟢 Conectado a MongoDB'))
  .catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

app.get('/', (req, res) => res.send('API funcionando 🚀'));
app.use("/api/auth", authRoutes); 
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactRoutes); 
app.use("/api/experience", experienceRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/school", schoolRoutes);
app.use("/api/contactInfo", contactInfoRoutes);

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
