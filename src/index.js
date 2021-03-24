import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Sahil Sharma";

ReactDOM.render(
  <>
   <h1>My name is {fname}</h1>
   <p>my lucky number is {Math.random()}</p>
  </>,
document.getElementById("root")
);