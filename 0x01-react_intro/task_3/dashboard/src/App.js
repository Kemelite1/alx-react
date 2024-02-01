import React from 'react';
import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      
      <div className="App-header">
        <img src={logo} className="App-logo" alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email'/>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' />
        <button type='submit'>Ok</button>
      </div>
  
      <div className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()} - {getFooterCopy(false)}</p>
        
      </div>
    </div>
  );
}

export default App;