const { sendVerificationCode } = require('./emailSender');

// Простая база данных пользователей (для примера)
const users = [
  { id: 1, email: 'user@example.com', password: 'password' }
];

// Контроллер для регистрации нового пользователя
const registerUser = (req, res) => {
  const { email, password } = req.body;


  // Проверка, что пользователь с таким email уже не существует
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Пользователь с таким email уже зарегистрирован' });
  }

  const verificationCode = Math.floor(Math.random()*10000);

  // Отправка кода на почту
  sendVerificationCode(email, verificationCode);

  // Создание нового пользователя
  const newUser = { id: users.length + 1, email, password };
  users.push(newUser);

  // Отправка подтверждения об успешной регистрации
  res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user: newUser });
};

module.exports = { registerUser };
