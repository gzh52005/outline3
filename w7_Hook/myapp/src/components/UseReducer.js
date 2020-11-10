import React, { useState, useEffect, useMemo, useCallback, useContext, useReducer } from 'react';

import {context} from '../store'

function UseReducer() {

    // const [goodslist, dispatch] = useReducer(reducer, initState)
    const {state:goodslist,dispatch} = useContext(context)

    const remove = useCallback(function(name){
        dispatch({type:'remove',name})
    },[goodslist]);
    const clear = useCallback(()=>{
        dispatch({type:'clear'})
    },[])

    const changeQty = useCallback((name,e)=>{
        dispatch({type:'change',name,qty:e.currentTarget.value})
    },[])
    const add2cart = useCallback(()=>{
        const goods = {name: "goods10", price: 198, qty: 1 }
        dispatch({type:'add',goods})
    },[])

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
                            <p className="price">{item.price} &times; <input type="number" value={item.qty} onChange={changeQty.bind(null,item.name)} /></p>
                            <button onClick={remove.bind(null,item.name)}>删除</button>
                        </li>
                    ))
                }
            </ul>
            <div><button onClick={add2cart}>添加</button><button onClick={clear}>清空</button> 总价：{totalPrice.toFixed(2)}</div>
        </div>
    )
}

export default UseReducer