import React from 'react';
import logo from './logo.svg';
import './App.css';

function Mostrar(props){
  return (parseFloat(props.temperatura) >= 100) ? <p>A água irá ferver!</p> : <p>A água não irá ferver!</p>;
}

class Calculadora extends React.Component {

  constructor(props){
    super(props);
    this.state = {temp: '100'};
    this.alterarTemp = this.alterarTemp.bind(this);
  }

  alterarTemp(event){
    this.setState({temp: event.target.value});
  }

  render(){//Quando o state varia, o elemento que o utiliza é renderizado novamente.
    return(
      <form>
        <input type="number" onChange={this.alterarTemp} />
        <Mostrar temperatura = {this.state.temp}/>
      </form>
    );
  }
}

export default Calculadora;
