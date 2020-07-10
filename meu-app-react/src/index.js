import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var cont = true;

function deslocar(){

	var div = document.getElementById("mostrar");

	if(cont){
		div.style.height = "200px";
		div.style.width = "200px";
	}
	var div = document.getElementById("mostrar");
	var height = parseInt(div.style.height.replace("px", "")), width = parseInt(div.style.width.replace("px", ""));
	var resultado = height + 10;
	div.style.height = resultado + "px";
	resultado = width+10;
	div.style.width = resultado + "px";
	cont = false;
}


ReactDOM.render(
	<App />
,
  document.getElementById('root')
);



setInterval(deslocar, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
