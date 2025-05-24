const ContactMessage = require("../models/Contact");

exports.sendMessage = async (req, res) => {
  try {
    const { name, email,number , message } = req.body;

    if (!name || !number || !message) {
      return res.status(400).json({ msg: "Todos los campos son obligatorios" });
    }

    const newMessage = new ContactMessage({ name, email, number, message });
    await newMessage.save();

    res.status(201).json({ msg: "Mensaje enviado con éxito" });
  } catch (error) {
    res.status(500).json({ msg: "Error al enviar mensaje" });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener mensajes" });
  }
}