import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <div>Main page</div>
                </Route>
                <Route path='/page-one'>
                    <div>Page 1</div>
                </Route>
                <Route path='/page-two'>
                    <div>Page 2</div>
                </Route>
                <Route path='/page-three'>
                    <div>Page 2</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;
