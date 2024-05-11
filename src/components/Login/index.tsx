import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import CloseButton from '../CloseButton';

const Log = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response: any = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        toast.success("Успешная атворизация", {
          className: 'relative text-white font-bold px-4 py-2 rounded-md shadow-md w-xl bg-green-500'
        })
        const data = await response.json();
        console.log(data)
        const { token } = data;

        // Сохраняем токен в localStorage или в cookies
        localStorage.setItem('jwtToken', token);
        localStorage.setItem('isAuth', "true");

        // Переход на другую страницу после успешной авторизации
        router.push('/lk');

      } else {
        console.log("err", response)
        toast.error("Ошибка авторизации", {
          className: 'relative text-white font-bold px-4 py-2 rounded-md shadow-md w-xl bg-red-500'
        })
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-[500px] mx-auto">
      <div className="w-full">
        <h2 className="text-left text-2xl font-semibold mb-7">Авторизация</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              className={`text-lg appearance-none border font-light rounded-lg w-full py-2 px-3 text-gray-700 leading-tight  focus:ring focus:outline-none focus:ring-violet-500`}
              placeholder="Email"
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <input
              className={`text-lg appearance-none border font-light rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:ring focus:outline-none focus:ring-violet-500`}
              placeholder="Password"
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            // {...register('password', { required: true })}
            //   ref={register}
            />
            {/* {errors?.password && <p className="text-red-500 text-xs italic">{errors?.password.message}</p>} */}
          </div>

          {/* {serverError && <p className="text-red-500 text-xs italic">{serverError}</p>} */}
          <div className="flex items-center justify-between border-2 border-violet-500 rounded-[52px] overflow-hidden">
            <button className="text-lg bg-violet-500 font-bold text-center w-1/2 text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outline" type="submit">
              Вход
            </button>
            <Link className="text-lg w-1/2 text-center font-medium text-violet-500 font-bold py-3 px-4 focus:outline-none focus:shadow-outline" href="/register">
              Регистрация
            </Link>
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
  );
}

export default Log;