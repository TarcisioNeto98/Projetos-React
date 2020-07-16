import React from 'react';

class Textarea extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'Digite algo no textarea!'};
        this.mudarTextarea = this.mudarTextarea.bind(this);
        this.enviar = this.enviar.bind(this);
    }

    mudarTextarea(event){
        alert(event.target);
        this.setState({value: event.target.value});
    }

    enviar(event){
        alert(this.state.value);
        //event.preventDefault();
    }

    render(){
        return (
            <form action="https://www.google.com/webhp?hl=pt-BR&sa=X&ved=0ahUKEwiTsY6N8tLqAhWEdN8KHUOUDKgQPAgH" onSubmit = {this.enviar} method="get">
                <textarea value={this.state.value} onChange={this.mudarTextarea} name="re" />
                <input type="submit"></input>
            </form>
        );
    }
}

export default Textarea;