// pages/profile.tsx
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import Avatar from '../Avatar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LK: React.FC = ({ data }: any) => {
  console.log(data)
  const [name, setName] = useState(data?.user?.name);
  const [surname, setSurname] = useState(data?.user?.surname);
  const [birthdate, setBirthdate] = useState(new Date('1990-01-01'));
  const [city, setCity] = useState(data?.user?.city);
  const [country, setCountry] = useState('Россия');
  const [isEditing, setIsEditing] = useState(false);

  // const [user, setUser] = useState(null);
  // const [error, setError] = useState(null);
  const router = useRouter()

  useEffect(() => {
    // Загрузка информации о пользователе при загрузке компонента
    // loadUserProfile();
  }, []);

  // const loadUserProfile = async () => {
  //   console.log("load")
  //   try {
  //     const token = localStorage.getItem('jwtToken');
  //     const response = await fetch('/userProfile', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     console.log(response)
  //     if (!response.ok) {
  //       throw new Error('Failed to load user profile');
  //     }
  //     const data = await response.json();
  //     // setUser(data.user);
  //     setName(data.user?.name);
  //     setSurname(data.user?.surname);
  //     setCity(data.user?.city);
  //   } catch (error) {
  //     setError(error.message);
  //     router.push('/')

  //   }
  // };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch('/userProfile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name, surname, city })
      });
      const data = await response.json();
      console.log('Данные пользователя успешно обновлены:', data);
      setIsEditing(false)
      // Дополнительные действия после успешного обновления данных пользователя
    } catch (error) {
      console.error('Ошибка при обновлении данных пользователя:', error);
    }
  };


  const handleLogout = async () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('isAuth');
    router.push('/auth'); // Перенаправление пользователя на страницу входа
  };


  return (
    <div className="flex justify-center">
      <div className="w-1/5 p-4">
        <ul className='h-full border-r-2'>
          <Link href="#" className="mb-2 block text-lg text-violet-500 hover:underline hover:text-violet-700 duration-100">Покупки</Link>
          <Link href="#" className="mb-2 block text-lg text-violet-500 hover:underline hover:text-violet-700 duration-100">Избранное</Link>
          <div onClick={handleLogout} className="mb-2 block text-lg text-violet-500 hover:underline hover:text-violet-700 duration-100">Выйти</div>
        </ul>
        {/* <button className="mt-8 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
          Log out
        </button> */}
      </div>
      <div className="w-3/5 p-4">
        <div>
          {isEditing ? (
            <>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Имя</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-violet-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">Фамилия</label>
                <input id="surname" type="text" value={surname} onChange={(e) => setSurname(e.target.value)} className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-violet-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Дата рождения</label>
                <DatePicker
                  selected={birthdate}
                  onChange={(date: Date) => setBirthdate(date)}
                  className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-violet-500"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Город</label>
                <input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-violet-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Страна</label>
                <input id="country" type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:border-violet-500" />
              </div>
              <button onClick={handleSave} className="mt-4 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
                Сохранить
              </button>
            </>
          ) : (
            <>
              <div>
                <h2 className="text-4xl font-semibold">{name} {surname}</h2>
                <p className='text-lg mt-3'>Дата рождения: {format(birthdate, 'dd/MM/yyyy')}</p>
                <p className='text-lg mt-3'>Город: {city}</p>
                <p className='text-lg mt-3'>Страна: {country}</p>
              </div>
              <button onClick={() => setIsEditing(true)} className="mt-4 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
                Редактировать
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LK;
