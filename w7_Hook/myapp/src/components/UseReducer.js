import React, { useState, useEffect, useMemo, useCallback, useContext, useReducer } from 'react';

const initState = [
    { name: "goods1", price: 98, qty: 2 },
    { name: "goods2", price: 198, qty: 2 },
    { name: "goods3", price: 998, qty: 1 },
];

// dispatch({type:'add',goods})
const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [action.goods, ...state];
        case 'remove':
            return state.filter(item => item.name != action.name);
        case 'change':
            return state.map(item => {
                if (item.name === action.name) {
                    item.qty = action.qty;
                }
                return item;
            })
        case 'clear':
            return []
        default:
            throw new Error('type error');
    }
}

function UseReducer() {
    const [qty, changeQty] = useState(1);
    const [num, changeNum] = useState(10);

    const [goodslist, dispatch] = useReducer(reducer, initState)

    const remove = useCallback(function(name){
        dispatch({type:'remove',name})
    },[goodslist]);

    const totalPrice = useMemo(function(){
        return goodslist.reduce((prev,item)=>prev+item.qty*item.price,0)
    },[goodslist])

    return (
        <div>
            <h4>useReducer</h4>
            <ul>
                {
                    goodslist.map(item => (
                        <li key={item.name}>
                            <h4>{item.name}</h4>
                            <p className="price">{item.price} &times; {item.qty}</p>
                            <button onClick={remove.bind(null,item.name)}>删除</button>
                        </li>
                    ))
                }
            </ul>
            <div>总价：{totalPrice.toFixed(2)}</div>
        </div>
    )
}

export default UseReducer