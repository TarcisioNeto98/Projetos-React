import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {value: ''};
    this.alterarInput = this.alterarInput.bind(this);
  }

  alterarInput(event){
    const obj = event.target;
    this.setState(() => ({
      value: obj.value
    }));
  }

  enviar(event){
    alert(event.target);
    if(event.cancelable) alert(event.cancelable); 
    event.preventDefault();
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.enviar}>
          <input value={this.state.value} onChange={this.alterarInput} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
