import React from 'react';
import Main from './components/MainComponent.js'
import {HashRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div>
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
