import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-500">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl mt-4">Ой, что-то пошло не так!</p>
        <p className="text-lg mt-2">Кажется, этой страницы не существует</p>
        <div className="mt-8">
        </div>
        <Link href="/" className="text-lg text-white mt-8 underline hover:text-gray-300">
          Вернуться на главную страницу
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;


