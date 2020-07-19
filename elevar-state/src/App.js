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
  return (parseFloat(valor) - 32) * (5/9);
}

function paraFahrenheit(valor){
  return (parseFloat(valor) * 9/5) + 32;
}

class Calculadora extends React.Component {

  constructor(props){
    super(props);
    this.state = {temp: '', escala:'c'};
    this.alterarTempCelcius = this.alterarTempCelcius.bind(this);
    this.alterarTempFahrenheit = this.alterarTempFahrenheit.bind(this);
  }

  alterarTempCelcius(temperatura, scale){
    this.setState({temp: temperatura, escala: scale});
  }

  alterarTempFahrenheit(temperatura, scale){
    this.setState({temp: temperatura, escala: scale});
  }

  render(){//Quando o state varia, o elemento que o utiliza é renderizado novamente.
    var tempConvertida = (this.state.escala === 'c') ? paraFahrenheit(this.state.temp) : paraCelcius(this.state.temp);
    
    return(
      <form>
        <MostrarEntradas temperatura = {this.state.escala === 'f' ? tempConvertida : this.state.temp} 
        mudarTemperatura={this.alterarTempCelcius} scale={'c'}/>
        <MostrarEntradas temperatura = {this.state.escala === 'c' ? tempConvertida : this.state.temp} 
        mudarTemperatura={this.alterarTempFahrenheit} scale={'f'}/>
      </form>
    );
  }
}

export default Calculadora;