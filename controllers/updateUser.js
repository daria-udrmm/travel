// routes/userProfile.js

const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Подключаем модель пользователя
const authenticateToken = require('./authenticateToken');

// Маршрут для обновления информации о пользователе
router.put('/userProfile', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { name, surname, city } = req.body;

    // Обновляем информацию о пользователе
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { name, surname, city } }, // Обновляемые поля пользователя
      { new: true } // Возвращает обновленного пользователя
    );

    console.log("updatedUser", updatedUser)
    // Если пользователь не найден, возвращаем ошибку
    if (!updatedUser) {
      return res.status(404).json({ error: 'Пользователь не найден' });
    }

    // Если пользователь найден и информация обновлена, возвращаем обновленные данные
    res.json({ user: updatedUser });
  } catch (error) {
    console.error('Ошибка при попытке обновить данные пользователя:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
