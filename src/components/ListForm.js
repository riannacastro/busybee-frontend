import React, { Component } from 'react'

export default class ListForm extends Component {
    state = {
        list: ""
    }

    handleChange = (e) => {
        this.setState({
            list: e.target.value
        })
    }

    handleSubmit = () => {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="list-form">New List:</label>
                <input id="note-input" type="text" value={this.state.list} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}
