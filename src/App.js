import React from 'react';
import './App.css';

import Display from './features/display/Display';
import Keyboard from './Components/Keyboard/Keyboard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="calc">
          <Display />
          <Keyboard />
        </div>
      </div>
    </div>
  );
}

export default App;
