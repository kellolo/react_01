import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Menu from './components/menu'
import Container from './components/container'

const items = [
    {href: '/', title:  'Home'},
    {href: '/news', title:  'News'},
    {href: '/blog', title:  'Blog'},
    {href: '/azaz', title:  'Azazaz'}
]

class App extends Component {
    render () {
        return (
            <div className="test">
                <Container>
                    <Menu items={ items } title="My Menu"/>
                    Hello world

                    <Menu items={ items } title={123}/>
                    Hello world

                    <Menu items={ items } />
                    Hello world
                </Container>
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('root'))
