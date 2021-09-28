import React, { Component } from 'react'

export default class PokemonNew extends Component {
    render() {
        return (
            <div>
               <p>Pokemon Name: {this.props.pokemon}</p> 
               <img src = {this.props.url_image} alt='' />
            </div>
        )
    }
}
