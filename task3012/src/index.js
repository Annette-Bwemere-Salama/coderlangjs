import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement('h2', null, 'Wow, I did it!');

ReactDOM.render(
    heading, 
    document.getElementById('root')
    );

    // const element = React.createElement('h2', {}, 'Wow, I did it!');
