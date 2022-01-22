import React from "react"
import { connect } from "react-redux"
import { setLists } from '../../redux/listActions';
import ListCard from "./ListCard";


class ListContainer extends React.Component {

    componentDidMount() {
        this.props.setLists()
    }
    
    render() {
        return (
            <div>
                <h1>All Lists:</h1>
                <div>
                    {this.props.lists.map(l => <ListCard key={l.id} {...l}/>)}
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
        setLists: () => dispatch(setLists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)