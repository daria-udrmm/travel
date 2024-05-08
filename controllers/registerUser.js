const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/users', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Создание нового пользователя
    const newUser = new User({ email, password });

    // Сохранение пользователя в базе данных
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Отправка созданного пользователя в ответ
  } catch (error) {
    console.error('Ошибка при добавлении нового пользователя:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;