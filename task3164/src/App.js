import React from "react";
import Paginator from "./components/Paginator";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/page/:pageNumber" component={Paginator} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
