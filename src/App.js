import React, { Component } from 'react'
import Pokedex from './Pokedex.js'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import Home from './Home.js'
import Details from './Details.js'
import Header from './Header.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/pokedex" 
                            exact
                            render={(routerProps) => <Pokedex {...routerProps} />} 
                        />
                        <Route 
                          path="/pokemon/:_id" 
                          exact
                          render={(routerProps) => <Details {...routerProps} />} 
                        />
                    </Switch>
          </Router>
        
      </div>
    )
  }
}

