import React, { Component } from "react"
import ReactGA from "react-ga"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
    constructor() {
        super()

        ReactGA.initialize("UA-18717141-5")
        ReactGA.pageview(window.location.pathname)
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React (now with GA)</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        )
    }
}

export default App
