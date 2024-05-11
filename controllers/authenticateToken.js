const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  // Получаем токен из заголовка Authorization
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // Если токен отсутствует, отправляем ошибку 401 (Unauthorized)
  if (!token) {
    return res.sendStatus(401);
  }

  // Проверяем и верифицируем токен
  jwt.verify(token, 'your_secret_key', (err, user) => {
    // Если токен недействителен, отправляем ошибку 403 (Forbidden)
    if (err) {
      return res.sendStatus(403);
    }
    // Если токен действителен, добавляем информацию о пользователе к объекту запроса
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
