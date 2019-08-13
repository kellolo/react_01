import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Menu from './components/menu'

class App extends Component {
    render () {
        return (
            <div className="test">
                <Menu />
                Hello world
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))
