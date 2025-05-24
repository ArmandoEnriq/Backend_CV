const ContactInfo = require('../models/ContactInfo');

exports.createContactInfo = async (req, res) => {
  const { phone, email } = req.body;

  if (!phone || !email) {
    return res.status(400).json({ msg: 'Todos los campos son obligatorios' });
  }

  const newContactInfo = new ContactInfo(req.body);
  await newContactInfo.save();

  res.status(201).json(newContactInfo);
};

exports.getContactInfo = async (req, res) => {
  const info = await ContactInfo.findOne();
  res.json(info);
};

exports.updateContactInfo = async (req, res) => {
  let info = await ContactInfo.findOne();

  if (!info) {
    info = new ContactInfo(req.body);
  } else {
    Object.assign(info, req.body);
  }

  await info.save();
  res.json(info);
};
