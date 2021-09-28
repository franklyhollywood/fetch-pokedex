
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent'
import PokemonItem from './PokemonItem'
import PokemonNew from './PokemonNew'


export default class Details extends Component {

    state = {
        singlePokemon: {}
    }

    componentDidMount = async() => {
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
        this.setState({singlePokemon: response.body})

    }

    render() {
        return (
            <div>
                <PokemonNew />
                <p>Pokemon Name: {this.state.singlePokemon.pokemon}</p>
                <p>Pokemon weight: {this.state.singlePokemon.weight}</p>

            
                
            <img className = "image" src = {this.state.singlePokemon.url_image} alt="pokemon"/>


            </div>
        )
    }
}
