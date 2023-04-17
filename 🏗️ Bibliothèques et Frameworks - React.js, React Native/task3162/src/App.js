import React from "react";
import MyPlace from "./components/MyPlace";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/i-am-from" component={MyPlace} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
