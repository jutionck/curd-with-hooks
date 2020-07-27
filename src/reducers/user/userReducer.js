const initialState = {
    users: [],
};

const userTodo = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return { ...state, users: action.data }
        case "ADD_USER":
            return {
                ...state, users: [...state.users, action.data]
            }
        case "DELETE_USER":
            // state.users.filter((users) => users.id !== action.id)
            return state
        case 'UPDATE_USER':
            if (state.users.id === action.id) {
                return { ...state, users: [...state.users, action.data] };
            } else return state;
        default:
            return state;
    }
};

export default userTodo;