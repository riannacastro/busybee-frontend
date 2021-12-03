import React, { Component } from 'react'

export default class HomeContainer extends Component {

    componentDidMount() {
        fetch('http://localhost:3001/lists')
        .then(r => r.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Home working</h1>
            </div>
        )
    }
}
