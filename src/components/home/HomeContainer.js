import React, { Component } from 'react'

export default class HomeContainer extends Component {

    state = {
        lists: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/lists')
        .then(r => r.json())
        .then(data => this.setState({
            lists: data
        }))
    }

    render() {
        return (
            <div>
                <h1>Home working</h1>
                <ul>
                    {this.state.lists.map(l => <li>{l.title}< br/> {l.tasks}</li>)}
                </ul>
            </div>
        )
    }
}
