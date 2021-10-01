
import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import request from 'superagent'
// import PokemonItem from './PokemonItem'
import PokemonNew from './PokemonNew'
import Spinner from './Spinner'


export default class Details extends Component {

    state = {
        singlePokemon: {},
        loading: false
    }

    componentDidMount = async() => {
        this.setState({loading: true})
        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params._id}`)
        this.setState({
            singlePokemon: response.body,
            loading: false
        })
        
     
    }

    render() {
        return (
            <div>
                
                
                {   
                this.state.loading
                ? <Spinner />
                : <PokemonNew singlePokemon = {this.state.singlePokemon}/>
                
            }
            </div>
        )
    }
}
