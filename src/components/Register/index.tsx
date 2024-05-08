import { useState } from 'react';
import * as yup from 'yup';

const RegisterPage = () => {
    const [htmlFormData, sethtmlFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        sethtmlFormData({ ...htmlFormData, [id]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({htmlFormData})
        try {
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...htmlFormData })
            });

            if (!response.ok) {
                throw new Error('Ошибка сервера');
            }

            const newUser = await response.json();
            console.log('Новый пользователь добавлен:', newUser);
            // Возможно, выполнить какие-то действия после успешного добавления
        } catch (error) {
            console.error('Ошибка при добавлении нового пользователя:', error);
            // Возможно, показать сообщение об ошибке пользователю
        }
    };
    return (
        <form className="w-96 mx-auto" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Ваша почта</label>
                <input type="email" id="email" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:ring focus:outline-none focus:ring-violet-500" placeholder="name@flowbite.com" required onChange={handleChange}/>
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Ваш пароль</label>
                <input type="password" id="password" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:ring focus:outline-none focus:ring-violet-500" required  onChange={handleChange}/>
            </div>
            {/* <div className="mb-5">
                <label htmlFor="repeat-password" className="block text-gray-700 text-sm font-bold mb-2">Повторите пароль</label>
                <input type="password" id="repeat-password" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:ring focus:outline-none focus:ring-violet-500" required />
            </div> */}
            <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я согласен с <a href="#" className="text-violet-500 hover:underline dark:text-violet-500"> условиями</a></label>
            </div>
            <button
                type="submit"
                className="bg-violet-500 text-white font-bold py-2 px-4 rounded-md hover:bg-violet-700 transition duration-300"
            >
                Зарегистрироваться
            </button>
        </form>
    )
}

export default RegisterPage;