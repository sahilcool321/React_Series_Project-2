import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Sahil";
const lname = "Sharma";

ReactDOM.render(
  <>
   <h1>{`My name is ${fname} ${lname}`}</h1>
   <p>my lucky number is {Math.random()}</p>
  </>,
document.getElementById("root")
);