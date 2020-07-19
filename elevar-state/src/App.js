import React from 'react';
import './App.css';

/*function Mostrar(props){
  return (parseFloat(props.temperatura) >= 100) ? <p>A água irá ferver!</p> : <p>A água não irá ferver!</p>;
}*/

const scales = {c:'Celcius', f:'Fahrenheit'};

class MostrarEntradas extends React.Component{

  constructor(props){
    super(props);
    this.alterarTemperatura = this.alterarTemperatura.bind(this);
  }

  alterarTemperatura(event){
    this.props.mudarTemperatura(event.target.value, this.props.scale);
  }

  render(){
    return (
      <fieldset>
        <legend>Digite a temperatura em {scales[this.props.scale]}</legend>
        <input value = {this.props.temperatura} type="number" onChange={this.alterarTemperatura}/>
      </fieldset>
    );  
  }
}

function paraCelcius(valor){
  return (valor - 32) * (5/9);
}

function paraFahrenheit(valor){
  return (valor * 9/5) + 32;
}

class Calculadora extends React.Component {

  constructor(props){
    super(props);
    this.state = {temp: '', escala:'c'};
    this.alterarTemp = this.alterarTemp.bind(this);
  }

  alterarTemp(temperatura, scale){
    this.setState({temp: temperatura, escala: scale});
  }

  render(){//Quando o state varia, o elemento que o utiliza é renderizado novamente.
    var tempConvertida = (this.state.escala === 'c') ? paraFahrenheit(parseFloat(this.state.temp)) : paraCelcius(parseFloat(this.state.temp));
    
    return(
      <form>
        <MostrarEntradas temperatura = {this.state.escala === 'f' ? tempConvertida : this.state.temp} 
        mudarTemperatura={this.alterarTemp} scale={'c'}/>
        <MostrarEntradas temperatura = {this.state.escala === 'c' ? tempConvertida : this.state.temp} 
        mudarTemperatura={this.alterarTemp} scale={'f'}/>
      </form>
    );
  }
}

export default Calculadora;