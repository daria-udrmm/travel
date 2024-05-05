import { ItemType, routes } from '@/types';
import Link from 'next/link';
import React, { useState } from 'react';

type ItemProps = {
  item: ItemType;
  showAsTwo?: boolean;
  route?: string;
}

const Item: React.FC<ItemProps> = ({ item, showAsTwo, route }) => {
  const { image, title, id, description } = item;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="relative bg-white border rounded-md overflow-hidden shadow-md hover:scale-105 transition-transform duration-200 hover:z-10 hover:cursor-pointer">
      <div className="relative">
        <Link href={`${route}/${id}`}>
           <img className={`w-full h-64 bg-gray-300 flex items-center justify-center ${showAsTwo ? 'object-cover' : ''}`} src={image} alt={title} />
        </Link>
        <button className="absolute top-2 right-2 text-gray-800" onClick={toggleFavorite}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isFavorite ? "red" : "none"} stroke={isFavorite ? "red" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart h-8 w-8">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div className="px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600 min-h-20">{description}</p>
      </div>
      <div className="bottom-0 left-0 right-0 px-4 py-4 bg-white">
        <button className="w-full px-4 py-2 bg-violet-500 text-white font-semibold rounded-md transition-colors duration-300 hover:bg-violet-700">Купить</button>
      </div>
    </div>
  );
};

export default Item;
