import { useState } from 'react';
import './App.css';
import Callback from './callback';

// Parent

function App() {
  const [UIcolor, setUIColor] = useState(null);

  // our callback function
  const getColor = (color) => {
    setUIColor(color);
  };
  return (
    <div className='App'>
      <div className='colorContainer' style={{ background: `${UIcolor}` }}></div>
      <Callback getColor={getColor} />
    </div>
  );
}

export default App;
