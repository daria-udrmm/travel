import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  onRemove: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, onRemove }) => {
  return (
    <div className="relative inline-block">
      <img src={src} alt={alt} className="w-20 h-20 rounded-full" />
      <button
        className="absolute top-0 right-0 p-1 bg-white rounded-full text-gray-600 hover:text-red-500"
        onClick={onRemove}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default Avatar;
