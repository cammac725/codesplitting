import React from 'react';
import Main from './Main';
import SplitThis from './SplitThis';
import { Router } from '@reach/router';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Main default path='/' />
        <SplitThis path='/split' />
      </Router>
    </div>
  );
}

export default App;
