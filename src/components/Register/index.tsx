import Link from 'next/link';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import CloseButton from '../CloseButton';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({ email, password })
        if (password === confirmPassword) {
            setPasswordsMatch(true);
            try {
                const response = await fetch('/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                console.log({response})

                if (!response.ok) {
                    throw new Error('Ошибка сервера');
                }

                await response.json();

                toast.success("Регистрация прошла успешно!", {
                    className: 'relative text-white font-bold px-4 py-2 rounded-md shadow-md w-xl bg-green-500'
                })
            } catch (error) {
                toast.error("Ошибка регистрации!", {
                    className: 'relative text-white font-bold px-4 py-2 rounded-md shadow-md w-xl bg-red-500'
                })
            }
        } else {
            setPasswordsMatch(false);
            toast.error("Ошибка регистрации: пароли не совпадают!", {
                className: 'relative text-white font-bold px-4 py-2 rounded-md shadow-md w-xl bg-red-500'
            })
        }
    };

    return (
        <div>
            <div>
                <form className="w-[500px] mx-auto" onSubmit={handleSubmit}>
                    <h2 className="text-left text-2xl font-semibold mb-7">Регистрация</h2>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Ваша почта</label>
                        <input type="email" id="email" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:ring focus:outline-none focus:ring-violet-500" placeholder="name@flowbite.com" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Ваш пароль</label>
                        <input type="password" id="password" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:ring focus:outline-none focus:ring-violet-500" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="repeat-password" className="block text-gray-700 text-sm font-bold mb-2">Повторите пароль</label>
                        <input type="password" id="repeat-password" className="text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:ring focus:outline-none focus:ring-violet-500" required onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    {!passwordsMatch && <p className="text-red-500 text-s mb-3">Пароли не совпадают</p>}
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я согласен с <a href="#" className="text-violet-500 hover:underline dark:text-violet-500"> условиями</a></label>
                    </div>
                    <div className="flex items-center justify-between border-2 border-violet-500 rounded-[52px] overflow-hidden">
                        <Link href="/auth" className="text-lg w-1/2 text-center font-medium text-violet-500 font-bold py-3 px-4 focus:outline-none focus:shadow-outline" type="submit">
                            Вход
                        </Link>
                        <button className=
                            "text-lg bg-violet-500 font-bold text-center w-1/2 text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outline"
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <ToastContainer position="bottom-right"
                    autoClose={2000}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    draggable
                    pauseOnHover
                    pauseOnFocusLoss={false}
                    closeButton={<CloseButton />}
                    icon={false}
                />
            </div>
        </div>

    )
}

export default RegisterPage;