import React from 'react';
import './App.css';

import Display from './features/display/Display';
import Keyboard from './Components/Keyboard/Keyboard';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="content">
          <tbody>
            <Display />
            <Keyboard />
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
