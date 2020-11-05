
export const LOGIN = 'login';
export const LOGOUT = 'logout';
export function login(user){
    return {type:LOGIN,user}
}

export function logout(){
    return {type:LOGOUT}
}

export default {
    login,
    logout
}