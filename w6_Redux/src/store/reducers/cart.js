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
            const goodslist = state.goodslist.filter(item=>item.id!==action.id);
            return {
                ...state,
                goodslist
            };
        // {type:'CHANGE_QTY',id,qty}
        case CHANGE_QTY:
            const goodslist = state.goodslist.map(item=>{
                if(item.id === action.id){
                    item.qty = action.qty
                }
                return item
            });
            return {
                ...state,
                goodslist
            };
        default:
            return state;
    }

}

export default reducer;