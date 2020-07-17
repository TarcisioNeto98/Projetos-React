import React from 'react';

class Multiplos extends React.Component{

    constructor(props){
        super(props);
        this.state = { checked:true, numDeConvidados:0};
        this.alterarInputs = this.alterarInputs.bind(this);
    }

    alterarInputs(event){
        const objInput = event.target;//Variável que armazena a referência do objeto que requisitou o evento.
        const value = objInput.name === 'checked' ? objInput.checked : objInput.value;
        const name = objInput.name;
        this.setState({[name]: value});
    }

    render(){
        return (
            <form>
                <label>sim ou não</label>
                <input type="checkbox" name="checked" checked = {this.state.checked} onChange={this.alterarInputs} />
                <br /><label>número de convidados!</label>
                <input name="numDeConvidados" type="number" value={this.state.numDeConvidados} onChange={this.alterarInputs} />
            </form>
        );
    }

}

export default Multiplos;