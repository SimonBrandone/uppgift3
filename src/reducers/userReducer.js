
let initialState = {
    user: {
        user: '',
        email: '',
        password: '',

}

}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_USER':
            return {
                user: action.user,
                email: action.email,
                password: action.password,
            }
            default: 
                return state;
                }
            }



export const selectUser = (state) => state.user.name;


export default userReducer;