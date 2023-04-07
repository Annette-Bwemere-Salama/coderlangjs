import React from "react";
import DynamicPage from "./components/DynamicPage";
import MainPage from "./components/MainPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const dynamicPages = [
    {
        pageHeading: "React.js Deep Dive as a beginner",
        pageDescription:
            "Say you have decided to learn React JS.You started looking for a tutorial, found one and created a todo list App. Great start!"
    },
    {
        pageHeading: "Pure vs Impure Functions",
        pageDescription:
            "These are the two terms that you always hear in a programming language called Pure and Impure functions."
    }
];

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={(routeProps) => (
                        <MainPage {...routeProps} dynamicPages={dynamicPages} />
                    )}
                />
                <Route path="/dynamic" component={DynamicPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
