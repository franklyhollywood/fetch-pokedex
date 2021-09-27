import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                Home page <Link to = 'Details.js'>Details</Link>
                <Link to = 'Pokedex.js'>Pokedex</Link>
            </div>
        )
    }
}
