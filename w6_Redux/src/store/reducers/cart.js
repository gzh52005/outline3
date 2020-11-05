import {ADD_TO_CART,REMOVE_FROM_CART,CHANGE_QTY} from '../actions/cart'

const initialState = {
    goodslist:[]
 }

 const reducer = function(state=initialState,action){
    let newState;
    switch(action.type){
        // {type:'add_to_cart',goods}
        case ADD_TO_CART:
            newState = [action.goods,...state.goodslist];
            return newState;
        // {type:'remove_from_cart',id}
        case REMOVE_FROM_CART:
            newState = state.goodslist.filter(item.id!==action.id);
            return newState;
        default:
            return state;
    }

}

export default reducer;