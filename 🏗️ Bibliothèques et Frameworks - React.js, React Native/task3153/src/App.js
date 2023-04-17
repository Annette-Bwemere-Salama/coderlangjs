import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from "./routes/Main";
import About from "./routes/About";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Main} />
                <Route path='/about' component={About} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
