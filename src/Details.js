
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import request from 'superagent'
import PokemonItem from './PokemonItem'
import PokemonNew from './PokemonNew'


export default class Details extends Component {

    state = {
        _id: ''
    }

    componentDidMount = async() => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.props.match.params._id}`)
        this.setState({_id: response.body})
    }

    


    render() {
        return (
            <div>
                <Header />
                <PokemonNew />
            </div>
        )
    }
}
