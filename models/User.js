// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: false },
  surname: { type: String, required: false },
  city: { type: String, required: false }
  // Другие поля пользователя...
});

const User = mongoose.model('User', userSchema);

module.exports = User;
