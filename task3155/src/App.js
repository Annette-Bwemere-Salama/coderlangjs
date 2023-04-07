import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Switch>
                    <Route exact path='/'>
                        <div>Main page</div>
                    </Route>
                    <Route path='/products'>
                        <div>Products list</div>
                    </Route>
                    <Route path='/about-us'>
                        <div>About us</div>
                    </Route>
                </Switch>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
