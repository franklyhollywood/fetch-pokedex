import React, { Component } from 'react'

export default class PokemonItem extends Component {
    render() {
        return (
            <li className = "li">
            
            <p>Pokemon Name: {this.props.pokemon.pokemon}</p>
            
            <img className = "image" src = {this.props.pokemon.url_image} alt="pokemon"/>

            </li>
            
        )
    }
}
