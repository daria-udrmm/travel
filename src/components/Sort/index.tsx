import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { FaTh, FaThLarge } from 'react-icons/fa';

interface SortProps {
  onChange: (value: string) => void;
  onSort: (value: boolean) => void;
  sortAs: boolean;
}

const Sort: React.FC<SortProps> = ({ onChange, onSort, sortAs }) => {
  const handleChange = (value?: string) => {
    console.log('change', value)
  };

  return (
    <div className="flex justify-between items-center space-x-4">
      <div>
      <div className="w-72">
        <Select variant="outlined" label="Сортировать по" onChange={handleChange}>
          <Option value="price-low">Цена (по возрастанию)</Option>
          <Option value="price-high">Цена (по убыванию)</Option>
          <Option value="popularity">Популярность</Option>
        </Select>
      </div>
      </div>

     <div className="flex justify-center">
        <button
          className={`mr-2 px-4 py-2 bg-violet-500 text-white rounded ${!sortAs ? 'opacity-50' : ''}`}
          onClick={() => {
            onSort(true);
          }}
          // disabled={showAsTwo}
        >
          <FaThLarge className="inline" />
        </button>
        <button
          className={`px-4 py-2 bg-violet-500 text-white rounded ${sortAs ? 'opacity-50' : ''}`}
          onClick={() => {
            onSort(false)
          }}
          // disabled={!showAsTwo}
        >
          <FaTh className="inline" />
        </button>
      </div>
    </div>

  );
};

export default Sort;
