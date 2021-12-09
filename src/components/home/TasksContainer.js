import React from "react"
import { connect } from "react-redux"



class TasksContainer extends React.Component {

    componentDidMount() {
        fetch("http://localhost:3000/lists")
        .then(r => r.json())
        .then(data => console.log(data))
    }
    
    render() {
        return (
            <div>
                <h1>All Lists:</h1>
        
            </div>
        )

    }
}
export default connect()(TasksContainer)