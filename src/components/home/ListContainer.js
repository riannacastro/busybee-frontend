import React from "react"
import { connect } from "react-redux"
import { setLists } from '../../redux/listActions';


class ListContainer extends React.Component {

    componentDidMount() {
        fetch("http://localhost:3000/lists")
        .then(r => r.json())
        .then(data => this.props.setLists(data))
    }
    
    render() {
        return (
            <div>
                <h1>All Lists:</h1>
                <div>
                    {this.props.lists.map(l => <p>{l.title}</p>)}
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLists: (lists) => dispatch(setLists(lists))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)