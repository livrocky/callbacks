import React, { useState } from 'react';

// child

const Callback = ({ handleColorChange }) => {
  const [activeColor, setActiveColor] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveColor(value);
    handleColorChange(value);
  };

  return (
    <input
      type='text'
      id='input'
      aria-label='input'
      onChange={handleChange}
      value={activeColor}
    ></input>
  );
};

export default Callback;
