import React from 'react'
import ReactDOM from 'react-dom';
import './Extra.css';

class Extra extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    render(){
        return (
            <div className="relogio">{this.state.date.toLocaleDateString()}</div>
        );
    }

}

export default Extra;