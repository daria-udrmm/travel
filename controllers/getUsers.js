const express = require('express');
const router = express.Router();
const authenticateToken = require('./authenticateToken');
const User = require('../models/User');

router.get('/userProfile', authenticateToken, async (req, res) => {
  console.error("req", req)
  const { userId } = req.user;
  // res.json({ userId });
  const user = await User.findById(userId);

  console.log("get user", user)

  // Если пользователь не найден, возвращаем ошибку
  if (!user) {
    // return res.status(404).json({ error: 'Пользователь не найден' });
  }

  // Если пользователь найден, возвращаем его данные
  res.json({ user });
});




module.exports = router;
