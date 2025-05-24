const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const hashedPassword = await bcrypt.hash("armando8845", 10);
  await Admin.create({ name: "Armando Enriquez", email: "armandoenriquezpuga@gmail.com", password: hashedPassword });
  console.log("✅ Admin creado");
  mongoose.disconnect();
});
