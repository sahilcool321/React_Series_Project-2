import React from 'react';
import ReactDOM from 'react-dom';


const currentdate = new Date().toLocaleDateString();

const datetime =   new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>Hello, My name is Sahil</h1>
   <p>{`Today date is ${currentdate}`}</p>
   <p>Current Time is {datetime}</p>
  </>,
document.getElementById("root")
);