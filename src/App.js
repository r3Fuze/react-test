import React, { Component } from "react"
import ReactGA from "react-ga"
import logo from "./logo.svg"
import "./App.css"

import Button from "@material-ui/core/Button"

import TestButton from "components/TestButton"
// import TestButton from "@/components/TestButton"

const style = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)"
}

class App extends Component {
    constructor() {
        super()

        ReactGA.initialize("UA-18717141-5", { 
            testMode: process.env.NODE_ENV === "test",
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React (now with GA)</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload!!!
                </p>

                <Button
                    style={style}
                    onClick={ReactGA.event({category:"User",action:"Pressed the button"})}
                >
                    Test button
                </Button>
                <TestButton></TestButton>
            </div>
        )
    }
}

export default App
