import React, { Component } from 'react'

export default class PokemonNew extends Component {
    render() {
        return (
            <div>
                <p>Pokemon Name: {this.props.singlePokemon.pokemon}</p>
                <p>weight: {this.props.singlePokemon.weight}</p>
                <p>Type 1: {this.props.singlePokemon.type_1}</p>
                <p>Type 2: {this.props.singlePokemon.type_2}</p>
                <p>Attack: {this.props.singlePokemon.attack}</p>
                <p>Defense: {this.props.singlePokemon.defense}</p>
                <p>HP: {this.props.singlePokemon.hp}</p>
                <p>Speed: {this.props.singlePokemon.speed}</p>
                <p>Hidden Ability: {this.props.singlePokemon.ability_hidden}</p>
                <img className = "image" src = {this.props.singlePokemon.url_image} alt="pokemon"/>
            </div>
        )
    }
}
