import React from 'react';
import './App.css';

import Display from './features/display/Display';
import Keyboard from './Components/Keyboard/Keyboard';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <table className="content">
          <tr><td>
          <Display />
          </td></tr>
          <tr><td>
          <Keyboard />
          </td></tr>
        </table>
      </header>
    </div>
  );
}

export default App;
