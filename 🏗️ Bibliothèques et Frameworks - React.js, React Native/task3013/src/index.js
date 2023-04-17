import React from 'react';
import ReactDOM from 'react-dom';
import { element } from './element';
let result = (2, 3);
const el = React.createElement("h4", "The sum is:", <h4>{element(result)}</h4>);
ReactDOM.render(
    el, document.getElementById('root'));
