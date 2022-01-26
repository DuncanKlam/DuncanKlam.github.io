import '../Styles/App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-text-container'>
          <div className='pineapple-suite-header small'>Welcome to the</div>
          <div className='pineapple-suite-header big'>Pineapple Suite</div>
        </div>
        <button className='enter-site-button'>{'> Enter <'}</button>
      </header>
    </div>
  );
}

export default App;
