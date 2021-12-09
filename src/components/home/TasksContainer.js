import React from "react"
import ListForm from "../ListForm"


export default class TasksContainer extends React.Component {
    
    render() {
        return (
            <div>
                <h1>All Lists:</h1>
                < ListForm />
                <ul>
                    {props.home.map(l => <li>{l.title}< br/> {l.tasks}</li>)}
                </ul>
            </div>
        )

    }
}