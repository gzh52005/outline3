import { LOGIN, LOGOUT } from '../actions/user'


let currentUser = localStorage.getItem('currentUser');
try {
    currentUser = JSON.parse(currentUser) || {}
} catch (err) {
    currentUser = {}
}

const initialState = {
    ...currentUser
}


const reducer = function (state = initialState, action) {
    let newState;
    switch (action.type) {
        case LOGIN:
            newState = action.user;
            if (action.remember) {
                localStorage.setItem('currentUser', JSON.stringify(newState))
            } else {
                sessionStorage.setItem('currentUser', JSON.stringify(newState))
            }
            return newState;
        case LOGOUT:
            localStorage.removeItem('currentUser')
            sessionStorage.removeItem('currentUser')
            return {}
        case 'change_password':
            newState = { ...state, password: action.password }
            return newState;
        case 'change_role':
            newState = { ...state, role: action.role }
            return newState;
        default:
            return state;
    }

}

export default reducer;