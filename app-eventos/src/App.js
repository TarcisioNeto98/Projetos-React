import React from 'react';
import logo from './logo.svg';
import './App.css';

var neto = 0;

class App extends React.Component {
  
  constructor(props){
    super(props);
    //this.parar = this.parar.bind(this);
    this.mostrar = this.mostrar.bind(this);
  }
  
  mostrar(){
    alert(this.props.name);
  }

  parar(event){
    event.preventDefault();
  }

  render(){
    return (
    <div className="App">
      <a onClick = {() => this.mostrar()}>Clique me, mostrar!</a>
      <br/><br/><br/><a className="ancora" onClick = {(e) => {alert(e.cancelable)}} href = "https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwjTrOaixsPqAhWDHbkGHTNXBE0QPAgH">Clique me, parar!</a>
    </div>
    );
  }
}

export default App;