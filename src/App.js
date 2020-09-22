import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./home/Home.js"
import NewFavour from "./newfavour/NewFavour.js"



export default function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/newfavour" component={NewFavour} />
                <Route component={Home} />
            </Switch>
        </main>
    )
}