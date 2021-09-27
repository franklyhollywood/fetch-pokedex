import React, { Component } from 'react'
import Dropdown from './Dropdown.js'
import request from 'superagent'
import PokedexArray from './PokedexArray'
import Spinner from './Spinner'
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
    filterSort = async (e) => {
       await this.setState({sortOrder: e.target.value})
        this.fetchSearch()
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

fetchSearch = async () => {
    this.setState({loading: true})
    const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}`)
    this.setState({
        pokedexArr: response.body.results,
        loading: false
        })
}
    render() {
        
        return (
            
            <div class = "container">
                
                <Dropdown className = "dropdown" handleChange = {this.filterSort} currentValue = {this.state.sortOrder} options = {["asc", "desc"]}/>

                <input type = 'text' placeholder = "type text here" value = {this.state.query} onChange = {this.filterQuery} />

                <button onClick = {this.filterSearch}>Search</button>
            
            {   
                this.state.loading
                ? <Spinner />
                : <PokedexArray pokedexArr = {this.state.pokedexArr}/>
                
            }
            </div>
        )
    }
}
