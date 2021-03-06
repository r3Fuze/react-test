import React, { Component } from "react"

import logo from "./logo.svg"
import "./App.css"

import styled from "styled-components"
import Button from "@material-ui/core/Button"

import TestButton from "components/TestButton"

const ga = () => { } // window.ga

const StyledButton = styled(Button)`&& {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
}`

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
                    <h1 className="App-title">Welcome to React (now with GA)</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload!
                </p>

                <StyledButton
                    onClick={ga("event", "Pressed the cool button", { event_catagory: "User" })}
                >
                    Styled Components
                </StyledButton>
                <br/>
                <TestButton></TestButton>
            </div>
        )
    }
}

export default App
