export const setLists = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/lists")
        .then(r => r.json())
        .then(lists => dispatch({type: "SET_LISTS", payload: lists}))
    }
}

export const addFavorite = (list) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/lists/${list.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(list)
        })
        .then(r => r.json())
        .then(list => dispatch({type: "ADD_FAVORITE", payload: list}))
    }
}