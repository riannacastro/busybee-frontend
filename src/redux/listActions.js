export const setLists = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/lists")
        .then(r => r.json())
        .then(lists => dispatch({type: "SET_LISTS", payload: lists}))
    }
}