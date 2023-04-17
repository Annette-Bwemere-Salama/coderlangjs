import React from "react";
import MyLocation from "./components/MyLocation";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/what-is-my-location" component={MyLocation} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
