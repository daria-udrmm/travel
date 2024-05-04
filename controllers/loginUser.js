const { sendVerificationCode } = require('./emailSender');

// Простая база данных пользователей (для примера)
const users = [
  { id: 1, email: 'user@example.com', password: 'password' }
];

// Контроллер для аутентификации пользователя
const loginUser = (req, res) => {
  const { email, password } = req.body;

  // Поиск пользователя в базе данных
  const user = users.find(user => user.email === email && user.password === password);

  const verificationCode = Math.floor(Math.random()*10000);

  // Отправка кода на почту
  sendVerificationCode(email, verificationCode);

  res.json({ success: true });
  // if (user) {
  //   // Если пользователь найден, возвращаем данные пользователя
  //   res.json({ success: true, user });
  // } else {
  //   // Если пользователь не найден, возвращаем ошибку
  //   res.status(401).json({ success: false, message: 'Неверный email или пароль' });
  // }
};

module.exports = { loginUser };
