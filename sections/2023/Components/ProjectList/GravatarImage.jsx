import React from 'react';

const GravatarImage = ({ name, size = 100 }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const getColorClass = () => {
    const colors = [
      'bg-red-400',
      'bg-blue-400',
      'bg-green-400',
      'bg-yellow-400',
      'bg-purple-400',
      'bg-pink-400',
      'bg-indigo-400',
      'bg-teal-400',
    ];
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <div
      className={`${getColorClass()} rounded-lg flex justify-center items-center text-white font-bold`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        fontSize: `${size / 2}px`,
      }}
    >
      {initials}
    </div>
  );
};

export default GravatarImage;
