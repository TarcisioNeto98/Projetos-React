import React from 'react';
import logo from './logo.svg';
import './App.css';
import Extra from './Extra';

class Relogio extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){//função iniciada quando o elemento react adentra na DOM.
    this.timerId = setInterval(() => this.iniciador(), 1000);
  }

  componentWillUnmount(){//Função iniciada quando a dom é retirada.
    clearInterval(this.timerId);
  }

  iniciador(){
    this.setState(function(){//retorna para a função os dados atualizados corretamente, utilizando funções
      return {date : new Date()};//regulares.
    });
  }

  render(){
    return(
      <div className="App">
        <p>{this.state.date.toLocaleTimeString()}</p>
        <Extra />
      </div>
    );
  }

    /*this.setState(() => {//Utiliza arrows functions.
      return {date: new Date()};
    });*/
}

function App() {
  return (
    <div>
      <Relogio/>
      <Relogio/>
      <Relogio/>
    </div>
  );
}

export default App;
