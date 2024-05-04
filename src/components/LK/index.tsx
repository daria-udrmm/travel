// pages/profile.tsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import Avatar from '../Avatar';
import Link from 'next/link';

const LK: React.FC = () => {
  const [name, setName] = useState('Иван');
  const [surname, setSurname] = useState('Дмитриев');
  const [birthdate, setBirthdate] = useState(new Date('1990-01-01'));
  const [city, setCity] = useState('Москва');
  const [country, setCountry] = useState('Россия');
  const [avatar, setAvatar] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [newAvatar, setNewAvatar] = useState<File | null>(null);

  const handleRemoveAvatar = () => {
    // Logic to remove avatar
    setAvatar('');
  };

  const handleSetAvatar = (newAvatarSrc: string) => {
    // Logic to set new avatar
    setAvatar(newAvatarSrc);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setNewAvatar(files[0]);
    }
  };

  const handleSave = () => {
    // Logic to save edited data
    setIsEditing(false);

    // Upload new avatar if available
    if (newAvatar) {
      const formData = new FormData();
      formData.append('avatar', newAvatar);

      // Perform upload logic, for example, using fetch or axios
      // Here is a mock implementation using fetch
      fetch('/api/upload-avatar', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          handleSetAvatar(data.avatarUrl);
        })
        .catch(error => console.error('Error uploading avatar:', error));
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-1/5 p-4">
        <ul className='h-full border-r-2'>
          <Link href="#" className="mb-2 block text-lg text-violet-500 hover:underline hover:text-violet-700 duration-100">Покупки</Link>
          <Link href="#" className="mb-2 block text-lg text-violet-500 hover:underline hover:text-violet-700 duration-100">Избранное</Link>
          <Link href="#" className="mb-2 block text-lg text-violet-500 hover:underline hover:text-violet-700 duration-100">Выйти</Link>
        </ul>
        {/* <button className="mt-8 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded">
          Log out
        </button> */}
      </div>
      <div className="w-3/5 p-4">
        <div className="mb-4">
          <Avatar src={avatar} alt="Avatar" onRemove={handleRemoveAvatar} onSet={handleSetAvatar} />
          {isEditing && (
            <div className="mt-4">
              <label htmlFor="avatar" className="block text-sm font-medium text-gray-700">Поменять фото</label>
              <input id="avatar" type="file" accept="image/*" onChange={handleFileChange} className="mt-1" />
            </div>
          )}
        </div>
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
