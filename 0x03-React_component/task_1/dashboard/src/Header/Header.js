import React from 'react';
import logo from './Holberton-logo.jpg';
import './Header.css';

function Header(){
    return (
        <div className="App-header">
        <img src={logo} className="App-logo" alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
    );
}
export default Header;