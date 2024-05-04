import { useState } from 'react';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email('Введите корректный email').required('Email обязателен для заполнения'),
    password: yup.string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен для заполнения'),
    firstName: yup.string().required('Имя обязательно для заполнения'),
    lastName: yup.string().required('Фамилия обязательна для заполнения'),
    dateOfBirth: yup.date().required('Дата рождения обязательна для заполнения'),
    city: yup.string().required('Родной город обязателен для заполнения'),
    country: yup.string().required('Страна обязательна для заполнения'),
});

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        city: '',
        country: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...formData })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setMessage('Произошла ошибка при попытке зарегистрироваться');
        }
    };

    return (
    <div className="max-w-md mx-auto">
            <div className="bg-white p-8 rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block font-bold">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500`}
                        />
                        {/* {errors.email && <p className="text-red-500">{errors.email}</p>} */}
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-bold">Пароль:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500`}
                        />
                        {/* {errors.password && <p className="text-red-500">{errors.password}</p>} */}
                    </div>
                    <div>
                        <label htmlFor="firstName" className="block font-bold">Имя:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500`}
                        />
                        {/* {errors.firstName && <p className="text-red-500">{errors.firstName}</p>} */}
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block font-bold">Фамилия:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500`}
                        />
                        {/* {errors.lastName && <p className="text-red-500">{errors.lastName}</p>} */}
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth" className="block font-bold">Дата рождения:</label>
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500`}
                        />
                        {/* {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>} */}
                    </div>
                    <div>
                        <label htmlFor="city" className="block font-bold">Родной город:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500`}
                        />
                        {/* {errors.city && <p className="text-red-500">{errors.city}</p>} */}
                    </div>
                    <div>
                        <label htmlFor="country" className="block font-bold">Страна:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={`w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-violet-500`}
                        />
                        {/* {errors.country && <p className="text-red-500">{errors.country}</p>} */}
                    </div>
                    <button
                        type="submit"
                        className="bg-violet-500 text-white font-bold py-2 px-4 rounded-md hover:bg-violet-600 transition duration-300"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage;