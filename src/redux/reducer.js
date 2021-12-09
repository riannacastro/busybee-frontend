function reducer(state = [], action) {
    switch (action.type) {
         case "SET_LISTS":

            return {
                ...state, 
                lists: action.payload
            };

        default:
            return state;
    }
};
export default reducer;