import React from "react";

const ListCard = (props) => {
    return (
        <div key={props.id} className="list-card">
            Title: {props.title}
            Tasks: {props.tasks}
        </div>
    )
}