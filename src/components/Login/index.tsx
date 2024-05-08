import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Log = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        console.log("ok", response)
        toast.success("Успешная атворизация", {
          className: 'relative text-white font-bold px-4 py-2 rounded-md shadow-md w-xl bg-green-500'
        })

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
    <div className="flex items-center justify-center max-w-96 mx-auto">
      <div className="w-full">
        <h2 className="text-center text-xl font-semibold mb-4">Вход</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className={`text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:ring focus:outline-none focus:ring-violet-500`}
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Пароль
            </label>
            <input
              className={`text-lg shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:ring focus:outline-none focus:ring-violet-500`}
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            // {...register('password', { required: true })}
            //   ref={register}
            />
            {/* {errors?.password && <p className="text-red-500 text-xs italic">{errors?.password.message}</p>} */}
          </div>

          {/* {serverError && <p className="text-red-500 text-xs italic">{serverError}</p>} */}
          <div className="flex items-center justify-between">
            <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Войти
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-violet-500 hover:text-violet-600" href="/register">
              Регистрация
            </a>
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


function CloseButton({ closeToast, type, ariaLabel }: any) {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        closeToast(e);
      }}
      type="button"
      aria-label={ariaLabel}
      className="absolute top-0 right-0 mt-1 mr-2"
    >X</button>
  );
}