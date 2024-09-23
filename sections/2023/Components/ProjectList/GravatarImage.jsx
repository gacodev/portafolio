import React from 'react';

const GravatarImage = ({ name, size = 100 }) => {
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor,
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: `${size / 2}px`,
        fontWeight: 'bold',
      }}
    >
      {initials}
    </div>
  );
};

export default GravatarImage;