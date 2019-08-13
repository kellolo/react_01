import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ReactDom from 'react-dom'
import './menu.css'

export default class Menu extends Component {
    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                href: PropTypes.string.isRequired
            })
        )
    }

    static defaultProps = {
        title: `LOL I'm default`
    }

    render () {
        const {items, title} = this.props
        return (
            <Fragment>
                <h1>{ title }</h1>
                <ul className="menu">
                    {items.map (el => <li> <a href={el.href}> {el.title} </a> </li>)}
                </ul>
            </Fragment>
        )
    }
}

