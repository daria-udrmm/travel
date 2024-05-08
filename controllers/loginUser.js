const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Маршрут для аутентификации пользователя
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Находим пользователя в базе данных по его имени пользователя
    const user = await User.findOne({ email });

    // Если пользователь не найден, возвращаем ошибку
    if (!user) {
      return res.status(401).json({ error: 'Пользователь не найден' });
    }

    // Сверяем хэшированный пароль из базы данных с введенным паролем
    const isPasswordValid = await bcrypt.compare(email, user.password);

    // Если пароль не совпадает, возвращаем ошибку
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Неверный пароль' });
    }

    // Если пользователь найден и пароль совпадает, создаем JWT токен
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    // Отправляем токен в ответ на успешную аутентификацию
    res.json({ token });
  } catch (error) {
    console.error('Ошибка при попытке аутентификации:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;