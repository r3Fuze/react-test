import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import TestButton from "components/TestButton"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
})

it("testing vscode coverage", () => {
    expect(TestButton.prototype.doStuff(2, 2)).toEqual(4)
})
