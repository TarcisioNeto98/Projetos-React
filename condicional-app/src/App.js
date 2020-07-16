import React from 'react';
import logo from './logo.svg';
import './App.css';

function Menssagem(props){
  return (
    <p>{!props.warn ? null : 'Warning'}</p>
  );
}

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {warning: true};
    this.clicarBotao = this.clicarBotao.bind(this);
  }

  clicarBotao(){
    this.setState(state => ({warning: !state.warning}));
  }

  render(){
    return (
      <div className="App">
        <Menssagem warn = {this.state.warning} />
        <button onClick={this.clicarBotao}>{this.state.warning ? 'show' : 'hide'}</button>
      </div>
    );
  }
}

export default App;
