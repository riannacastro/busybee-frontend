import React from "react"
import { connect } from "react-redux"
import { setTasks } from '../../redux/tasksActions';


class TasksContainer extends React.Component {

    componentDidMount() {
        fetch("http://localhost:3000/lists")
        .then(r => r.json())
        .then(data => this.props.setTasks(data))
    }
    
    render() {
        return (
            <div>
                <h1>All Lists:</h1>
        
            </div>
        )

    }
}

function mapDispatchToProps(dispatch) {
    return {
        setTasks: (tasks) => dispatch(setTasks(tasks))
    }
}

export default connect(null, mapDispatchToProps)(TasksContainer)