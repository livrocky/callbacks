import { useState } from 'react';
import './App.css';
import Callback from './callback';

// Parent

function App() {
  const [UIcolor, setUIColor] = useState();

  // callback function

  const handleColorChange = (color) => {
    setUIColor(color);
  };
  return (
    <div className='App'>
      <div className='colorContainer' style={{ background: `${UIcolor}` }}></div>
      <Callback handleColorChange={setUIColor} />
    </div>
  );
}

export default App;
