import {useState, useEffect, useContext} from 'react';

import Content from './components/Content';
import Overlay from './components/Overlay';

import './App.css';

function App() {

  return (
    <div className="App">
      <Content />
      <Overlay />
    </div>
  ); 
}

export default App;
