import React from "react"
import { connect } from "react-redux"
import { setLists } from '../../redux/listActions';


class ListContainer extends React.Component {

    componentDidMount() {
        this.props.setLists()
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
        lists: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setLists: () => dispatch(setLists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)