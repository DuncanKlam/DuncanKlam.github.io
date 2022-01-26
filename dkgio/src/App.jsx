import './App.css';
import { useState } from 'react';
import LoadingScreens from './LoadingScreens';

function App() {

  const [x1, setX1] = useState(135);
  const [x2, setX2] = useState(135);
  const [y1, setY1] = useState(20);
  const [y2, setY2] = useState(30);

  const changeTextPosition = () => {
    setX1(Math.floor(Math.random() * 500))
    setX2(Math.floor(Math.random() * 500))
    setY1(Math.floor(Math.random() * 200))
    setY2(Math.floor(Math.random() * 150))
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='text-container'>
          <p style={{ position: 'relative', top: y1, left: x1 }}>Under construction!</p>
        </div>
        <div onClick={changeTextPosition} className='loading-screen-container'>
          <LoadingScreens />
        </div>
        <div className='text-container'>
          <p style={{ position: 'relative', top: y2, left: x2 }}>We'll be right back!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
