import React, { Component } from 'react'

export default class ListForm extends Component {
    
    state = {
        title: "",
        list: ""

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="list-form">New List:</label> <br />
                <label htmlFor="list-form">Title:</label>
                <input id="note-input" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                <label htmlFor="list-form">List:</label>
                <textarea id="note-input" type="text" name="list" value={this.state.list} onChange={this.handleChange} />
                <input type="submit" />
            </form>
        )
    }
}
