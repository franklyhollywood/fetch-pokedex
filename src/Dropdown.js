import React, { Component } from 'react'

export default class Dropdown extends Component {
    render() {
        return (
            <select className = "select" value = {this.props.currentValue} onChange = {this.props.handleChange}>
                
            <option className = "option" value = ""></option>
            {this.props.options.map(option => <option value = {option}>{option}</option>)}
      </select>
        )
    }
}
