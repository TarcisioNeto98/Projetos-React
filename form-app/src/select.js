import React from 'react';

class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.mudarSelect = this.mudarSelect.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    mudarSelect(event){
        alert(event.target);
        this.setState({value: event.target.value});
    }

    enviar(event){
        alert(this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit = {this.enviar}>
                <select value={this.state.value} onChange={this.mudarSelect}>
                    <option value = 'carro'>Carro</option>
                    <option value = "moto">Moto</option>
                    <option value = "onibus">Onibus</option>
                </select>
                <input type="submit"></input>
            </form>
        );
    }
}

export default Select;