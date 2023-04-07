import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <div>Main page</div>
                </Route>
                <Route path='/new-profile-page'>
                    <div>New profile page</div>
                </Route>
                <Route path='/old-profile-page'>
                    <div>Old profile page</div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default App;
