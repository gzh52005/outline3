const initialState = {
    showMenu:true
 }

 const reducer = function(state=initialState,action){
    let newState;
    switch(action.type){
        // {type:'add_to_cart',goods}
        case 'show_menu':
            newState = {...state,showMenu:true};
            return newState;
        // {type:'remove_from_cart',id}
        case 'hide_menu':
            newState = {...state,showMenu:false};
            return newState;
        default:
            return state;
    }

}

export default reducer;