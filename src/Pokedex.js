import React, { Component } from 'react'
import Dropdown from './Dropdown.js'
import request from 'superagent'
import PokedexArray from './PokedexArray'
import './App.css'

export default class pokedex extends Component {
// Set state before render
    state = {
        //state of dropdown: 
        sortOrder: 'asc',
        //state of loading:
        loading: false, 
        //state of input field:
        query: '',
        //state of pokedexarray
        pokedexArr: []
    }
   //gets the state of the dropdown
    filterSort = (e) => {
        this.setState({sortOrder: e.target.value})
    }
    
    filterQuery = (e) => {
        this.setState({query: e.target.value})
    }

    filterSearch = (e) => {
        this.fetchSearch()
    }


    //non-booger
componentDidMount = () => {
    this.fetchSearch()  
}
// async await function that will hit the pokeman API and set the data response to state - 
fetchSearch = async () => {
    this.setState({loading: true})
    const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`)
    this.setState({
        pokedexArr: response.body.results,
        loading: false
        })
}
    render() {
        
        
        
        return (
            
            <div>
                {/* <ul>
                  
                {this.state.pokedexArr.map(pokemon => <PokemonItem pokemon = {pokemon}/>)}
                </ul> */}
                {/* Have a dropdown ascending / descending sort order state */}
                <Dropdown handleChange = {this.filterSort} currentValue = {this.state.sortOrder} options = {["asc", "desc"]}/>

                <input type = 'text' value = {this.state.query} onChange = {this.filterQuery} />

                <button onClick = {this.filterSearch}>Search</button>

                <PokedexArray pokedexArr = {this.state.pokedexArr}/>
                {/* Need a button */}
                {/* fetches (Superagent API Call) and renders (Where you call your fetch function) unfiltered pokemon on load. You should use componentDidMount  */}
                {/* map through list array pokedex */}
                {/* Loading spinner - loading state */}
            </div>
        )
    }
}
