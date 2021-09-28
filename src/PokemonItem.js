import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokemonItem extends Component {
    render() {
        return (
            
            <li className = "li">
                <Link to = {`/pokemon/${this.props.pokemon._id}`} >
            <p>Pokemon Name: {this.props.pokemon.pokemon}</p>
            

            
                
            <img className = "image" src = {this.props.pokemon.url_image} alt="pokemon"/>
                </Link>
               

            </li>
            
        )
    }
}
