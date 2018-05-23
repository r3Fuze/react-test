import React, { Component } from "react"

class TestButton extends Component {
    doStuff(a, b) {
        return a * b
    }
    
    render() {
        return (
            <button>Cool Button</button>
        )
    }
}

export default TestButton