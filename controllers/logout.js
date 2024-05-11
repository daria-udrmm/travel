const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Маршрут для выхода пользователя
router.post('/logout', async (req, res) => {
//   try {
//     // Получаем токен аутентификации из заголовка запроса
//     const token = req.header('Authorization').replace('Bearer ', '');

//     // Проверяем, является ли токен действительным
//     const decoded = jwt.verify(token, 'your_secret_key');

//     // Находим пользователя по идентификатору токена
//     const user = await User.findById(decoded.userId);

//     // Удаляем токен аутентификации из массива токенов пользователя
//     user.tokens = user.tokens.filter(t => t !== token);

//     // Сохраняем обновленные данные пользователя
//     await user.save();

//     res.status(200).json({ message: 'Пользователь успешно вышел из системы' });
//   } catch (error) {
//     console.error('Ошибка при выходе пользователя:', error);
//     res.status(500).json({ error: 'Ошибка при выходе пользователя' });
//   }
});

module.exports = router;
