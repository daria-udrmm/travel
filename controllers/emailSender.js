const nodemailer = require('nodemailer');

// Создаем транспорт для отправки почты
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'dayana.sipes49@ethereal.email',
        pass: 'Mb7RB68hbU7umJ6NWu'
    }
});

// Функция для отправки письма с кодом на почту
const sendVerificationCode = (email, code) => {
  const mailOptions = {
    from: 'dayana.sipes49@ethereal.email', // ваш email
    to: email,
    subject: 'Код подтверждения регистрации',
    text: `Ваш код подтверждения: ${code}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Ошибка при отправке письма:', error);
    } else {
      console.log('Письмо успешно отправлено:', info.response);
    }
  });
};

module.exports = { sendVerificationCode };
