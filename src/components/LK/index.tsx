import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa'; // Иконка плюсика из библиотеки FontAwesome
import InputMask from 'react-input-mask';
import * as yup from 'yup';
import schema from './schema';

interface LKProps {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: string;
  city: string;
  onSave: (data: LKProps) => void;
}

const LK: React.FC<LKProps> = ({ firstName, lastName, middleName, dateOfBirth, city, onSave }) => {
  const [formData, setFormData] = useState({ firstName, lastName, middleName, dateOfBirth, city });
  const [avatar, setAvatar] = useState<string | null>(null);
  const [newAvatar, setNewAvatar] = useState<File | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors({ ...errors, [name]: '' });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrors({ ...errors, [name]: error.message });
      }
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setAvatar(reader.result);
          setNewAvatar(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setAvatar(reader.result);
          setNewAvatar(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      onSave(formData);
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors: { [key: string]: string } = {};
        error.inner.forEach(err => {
          if (err.path) {
            validationErrors[err.path] = err.message;
          }
        });
        setErrors(validationErrors);
      }
    }
  };

  const handleNewAvatarClick = () => {
    setAvatar(null);
    setNewAvatar(null);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white shadow-md rounded px-8 py-8">
        <h2 className="text-2xl font-semibold mb-6">Личный кабинет</h2>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <div
              className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 relative"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <img
                className="w-full h-full object-cover"
                src={avatar || '/placeholder.jpg'}
                alt="Avatar"
              />
              {avatar && (
                <div
                  className="absolute top-0 right-0 -mt-2 -mr-2 bg-white rounded-full flex items-center justify-center cursor-pointer"
                  onClick={handleNewAvatarClick}
                >
                  <FaPlus className="text-gray-600 w-6 h-6" />
                </div>
              )}
            </div>
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              id="avatarInput"
            />
            {!avatar && (
              <label
                htmlFor="avatarInput"
                className="block text-center text-gray-500 text-sm cursor-pointer"
              >
                Нажмите, чтобы выбрать аватарку
              </label>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
              Имя
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500`}
              id="firstName"
              type="text"
              placeholder="Имя"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs italic">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
              Фамилия
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500`}
              id="lastName"
              type="text"
              placeholder="Фамилия"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs italic">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
              Отчество
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.middleName ? 'border-red-500' : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500`}
              id="middleName"
              type="text"
              placeholder="Отчество"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
            {errors.middleName && (
              <p className="text-red-500 text-xs italic">{errors.middleName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dateOfBirth">
              Дата рождения
            </label>
            <InputMask
              mask="99.99.9999"
              maskChar="_"
              className={`shadow appearance-none border ${
                errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500`}
              id="dateOfBirth"
              type="text"
              placeholder="ДД.ММ.ГГГГ"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-xs italic">{errors.dateOfBirth}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              Город
            </label>
            <input
              className={`shadow appearance-none border ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-purple-500`}
              id="city"
              type="text"
              placeholder="Город"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              type="submit"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LK;
