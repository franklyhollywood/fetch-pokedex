import React, { Component } from 'react'
import PokemonItem from './PokemonItem'

export default class PokedexArray extends Component {
    render() {
        return (
            <ul>
                  
                {this.props.pokedexArr.map(pokemon => <PokemonItem pokemon = {pokemon}/>)}
            
            </ul>
        )
    }
}
