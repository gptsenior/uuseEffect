import React, { useState, useEffect } from 'react';

const ColorBlock = () => {
  
  const [color, setColor] = useState('red');

  
  const toggleColor = () => {
    setColor(prevColor => prevColor === 'red' ? 'blue' : 'red');
  };

  
  useEffect(() => {
    console.log(`Поточний колір: ${color}`);
  }, [color]);


  const blockStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: color,
    margin: '20px auto',
    transition: 'background-color 0.3s'
  };

  return (
    <div>
      <div style={blockStyle}></div>
      <button onClick={toggleColor}>
        Змінити колір квадрату
      </button>
    </div>
  );
};

export default ColorBlock;