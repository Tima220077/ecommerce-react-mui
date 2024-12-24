
export const shopReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD_ITEM":

            return state + 1;
        case 'DELETE_ITEM':
            return state - 1
        default:
            return state;
    }
};
