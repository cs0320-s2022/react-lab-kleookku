import React from 'react';
import logo from './logo.svg';
import './App.css';

function Horoscope() {
  return (
    <div className="Horoscope">
      <header className="Horoscope Header">
        <TextBox label={"Sun Sign"}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

function TextBox(props: String) {
  return <div>
    <label> {props} </label>
    <input type = "text"> </input>
  </div>
}
export default Horoscope;
