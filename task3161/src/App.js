import React from "react";
import Ticket from "./components/Ticket";
import MainPage from "./components/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={MainPage}
                />
                <Route path="/ticket/:id" component={Ticket} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
