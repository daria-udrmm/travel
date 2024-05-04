// Импорт модулей
const express = require('express');
const mongoose = require('mongoose');
const next = require('next');
const bodyParser = require('body-parser');
// Импорт модуля для работы с турами
const { getAllTours } = require('./controllers/getAllTours');
const { getAllHotels } = require('./controllers/getAllHotels');
// Импорт модулей для аутентификации
const { registerUser } = require('./controllers/registerUser');
// const { loginUser } = require('./controllers/loginUser');
const authRouter = require('./controllers/loginUser');
const User = require('./models/User');
const { MongoClient, ServerApiVersion } = require('mongodb');


// Создание экземпляра сервера Express
const app = express();



// const uri = "mongodb+srv://darya:dara12345@cluster0.hdpcpkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err))

// Парсинг тела запроса в формате JSON
app.use(bodyParser.json());

app.use('/auth', authRouter);

// Добавление нового пользователя
// const newUser = new User({
//   email: 'example@example.com',
//   password: 'password123',
//   // Другие поля пользователя...
// });

// newUser.save()
//   .then(() => console.log('New user added:', newUser))
//   .catch(err => console.error('Error adding new user:', err));

// Роуты для аутентификации
// app.post('/login', loginUser);
app.post('/register', registerUser);

// Роут для получения информации о турах
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






// // Импортируем необходимые модули
// const express = require('express');
// const next = require('next');
// const bodyParser = require('body-parser');

// // Создаем экземпляр сервера Express
// const app = express();
// const port = 3000; // Порт для сервера

// // Создаем экземпляр приложения Next.js
// const dev = process.env.NODE_ENV !== 'production';
// const nextApp = next({ dev });

// // Простая база данных пользователей (для примера)
// const users = [
//   { id: 1, email: 'user@example.com', password: 'password' }
// ];

// // Массив с информацией о турах
// const tours = [
//     {
//         id: 1,
//         title: 'Путешествие в Париж',
//         description: 'Исследуйте прекрасные улицы Парижа и его исторические достопримечательности.',
//         date: '2024-05-15',
//         city: 'Париж',
//         country: 'Франция',
//         image: 'https://paris-life.info/wp-content/uploads/2016/11/luvr-paris.jpg',
//         url: 'https://example.com/tours/paris'
//     }
// ];

// // Парсим тело запроса в формате JSON
// app.use(bodyParser.json());

// // Роут для аутентификации пользователя
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Проверяем существование пользователя в базе данных
//   const user = users.find(user => user.email === email && user.password === password);

//   if (user) {
//     // Если пользователь найден, возвращаем данные пользователя
//     res.json({ success: true, user });
//   } else {
//     // Если пользователь не найден, возвращаем ошибку
//     res.status(401).json({ success: false, message: 'Неверный email или пароль' });
//   }
// });

// // Роут для регистрации нового пользователя
// app.post('/register', (req, res) => {
//   const { email, password } = req.body;

//   // Проверяем, что пользователь с таким email не существует
//   const existingUser = users.find(user => user.email === email);
//   if (existingUser) {
//     return res.status(400).json({ message: 'Пользователь с таким email уже зарегистрирован' });
//   }

//   // Создаем нового пользователя
//   const newUser = { id: users.length + 1, email, password };
//   users.push(newUser);

//   // Отправляем подтверждение об успешной регистрации
//   res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user: newUser });
// });

// // Маршрут для получения информации о турах
// app.get('/allTours', (req, res) => {
//     const page = parseInt(req.query.page) || 1; // Номер страницы (по умолчанию 1)
//     const pageSize = 6; // Размер страницы

//     const startIndex = (page - 1) * pageSize;
//     const endIndex = startIndex + pageSize;
//     const paginatedTours = tours.slice(startIndex, endIndex);

//     res.json({
//         page: page,
//         totalPages: Math.ceil(tours.length / pageSize),
//         tours: paginatedTours
//     });
// });



// // Обрабатываем все запросы через Next.js
// nextApp.prepare().then(() => {
//   // Роут для всех остальных запросов - перенаправление на Next.js
//   app.all('*', (req, res) => {
//     return nextApp.getRequestHandler()(req, res);
//   });

//   // Слушаем указанный порт
//   app.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`Сервер запущен на порту ${port}`);
//   });
// });



//  mongoose.connect("mongodb+srv://darya:dara12345@cluster0.hdpcpkv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
//    .then(() => console.log('Connected to MongoDB'))
//    .catch(err => console.error('Error connecting to MongoDB:', err));