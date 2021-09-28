
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import request from 'superagent'
// import PokemonItem from './PokemonItem'
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
                <p>weight: {this.state.singlePokemon.weight}</p>
                <p>Type 1: {this.state.singlePokemon.type_1}</p>
                <p>Type 2: {this.state.singlePokemon.type_2}</p>
                <p>Attack: {this.state.singlePokemon.attack}</p>
                <p>Defense: {this.state.singlePokemon.defense}</p>
                <p>HP: {this.state.singlePokemon.hp}</p>
                <p>Speed: {this.state.singlePokemon.speed}</p>
                <p>Hidden Ability: {this.state.singlePokemon.ability_hidden}</p>
                <img className = "image" src = {this.state.singlePokemon.url_image} alt="pokemon"/>
            </div>
        )
    }
}
