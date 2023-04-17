import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/main'>
                    <h2>Main page</h2>
                </Route>
                <Route path='/about'>
                    <h2>About page</h2>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
