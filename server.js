const express = require('express');
const mongoose = require('mongoose');
const next = require('next');
const bodyParser = require('body-parser');
const { getAllTours } = require('./controllers/getAllTours');
const { getAllHotels } = require('./controllers/getAllHotels');
// const authRouter = require('./controllers/loginUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerUser = require('./controllers/registerUser');
const User = require('./models/User');

const app = express();

const uri = "mongodb+srv://user2000:user2000@cluster0.hdpcpkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('Успешное подключение к базе данных');

    try {
      // Находим всех пользователей
      const users = await User.find({});
      console.log('Список пользователей:');
      console.log(users);
    } catch (error) {
      console.error('Ошибка при поиске пользователей:', error);
    }
  })
  .catch(err => {
    console.error('Ошибка при подключении к базе данных:', err);
  });


// Парсинг тела запроса в формате JSON
app.use(bodyParser.json());

// app.post('/test', authRouter);
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Находим пользователя в базе данных по его имени пользователя
    const user = await User.findOne({ email });
    console.error('user', user);

    // Если пользователь не найден, возвращаем ошибку
    if (!user) {
      return res.status(401).json({ error: 'Пользователь не найден' });
    }

    // Сверяем хэшированный пароль из базы данных с введенным паролем
    const isPasswordValid = password === user.password;

    // Если пароль не совпадает, возвращаем ошибку
    if (!isPasswordValid) {
      return res.status(401).json({ error: `Неверный пароль ${password} ${user.password}` });
    }

    // Если пользователь найден и пароль совпадает, создаем JWT токен
    const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });

    // Отправляем токен в ответ на успешную аутентификацию
    res.json({ token });
  } catch (error) {
    console.error('Ошибка при попытке аутентификации:', error);
    res.status(500).json({ error: error.message });
  }
});
app.post('/users', registerUser);

app.get('/allTours', getAllTours);
app.get('/allHotels', getAllHotels);

// Создание экземпляра приложения Next.js
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

// Обработка всех остальных запросов через Next.js
nextApp.prepare().then(() => {
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  // Слушаем указанный порт
  const port = process.env.PORT || 3000;
  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Сервер запущен на порту ${port}`);
  });
});