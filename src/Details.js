import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request, { get } 'superagent'

export default class Details extends Component {

    state {
        _id: ''
    }

    componentDidMount = async()

    render() {
        return (
            <div>
                Details <Link to = 'Home.js'>Home</Link>
                <Link to = 'Pokedex.js'>Pokedex</Link>
            </div>
        )
    }
}
