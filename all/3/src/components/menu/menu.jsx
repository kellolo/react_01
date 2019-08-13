import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './menu.css'

export default class Menu extends Component {
    render () {
        return (
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        )
    }
}

