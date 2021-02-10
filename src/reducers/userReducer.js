let initialState = {
    user: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'registerUser':
            return {
                username: action.payload,
                email: action.payload,
                password: action.payload,
                completed: false,
            }
        case 'changeUser':
            return {
                username: action.payload,
                email: action.payload,
                password: action.payload,
            }
            default: return state;
    }
}

export const selectUser = (state) => state.user.user;

export default userReducer;