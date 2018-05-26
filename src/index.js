import React from "react"
import ReactDOM from "react-dom"

import "./index.css"
import "typeface-roboto"
import "material-icons"

import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

// TODO: See https://material-ui.com/guides/interoperability/#controlling-priority
//           https://material-ui.com/customization/css-in-js/#css-injection-order
// Required to have styled-components styles overwrite material-ui
// Alternative is surrounding styled-components css with && { ... }
// This may break something in tests if we just import <App/> we might have to move it to App.js
import { create } from "jss"
import JssProvider from "react-jss/lib/JssProvider"
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles"

const styleNode = document.createComment("insertion-point-jss")
document.head.insertBefore(styleNode, document.head.firstChild)

const jss = create(jssPreset())
jss.options.insertionPoint = "insertion-point-jss"

class JssApp extends React.Component {
    render() {
        return (
            <JssProvider jss={jss} generateClassName={createGenerateClassName()}>
                <App/>
            </JssProvider>
        )
    }
}

ReactDOM.render(<JssApp/>, document.getElementById("root"))
registerServiceWorker()
