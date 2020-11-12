import React from 'react';
import { Link } from '@reach/router';
import logo from './logo.svg';
import './App.css';

const Main = () => (
    <header className="App-header">
        <Link to='/split'>
            <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
)

export default Main;