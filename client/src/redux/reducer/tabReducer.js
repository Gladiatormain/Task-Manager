
export const tabReducer = (state = "All Todos", action) => {
    switch (action.type) {
        case "TOGGLE_TAB":
            return action.selected
        default: 
            return state;
    }
}