import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return props.id + " Hello World";
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="shadow" id="mostrar"></div>
        <h1><Welcome id = "1°" /></h1>
        <button id = "parar">Parar</button>
      </header>
    </div>
  );
}

export default App;
