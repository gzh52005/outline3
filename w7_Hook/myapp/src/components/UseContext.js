import React, { useState, useEffect, useMemo, useCallback,useContext } from 'react';

import context from '../context'

function UseContext() {
    const [qty, changeQty] = useState(1);
    const [num, changeNum] = useState(10);

    // useContext用法
    const value = useContext(context);
    console.log('value2=',value)

    return (
        // 传统用法
        // <context.Consumer>
        //     {
        //         (value)=>{
        //             console.log('value=',value);
        //             return <div>
        //                 <h4>useContext</h4>
        //                 <button onClick={()=>{
        //                     changeQty(qty+1)
        //                 }}>qty:{qty}</button>
        //                 <button onClick={()=>{
        //                     changeNum(num+10)
        //                 }}>num:{num}</button>
        //             </div>
        //         }
        //     }
        // </context.Consumer>

        
        <div>
            <h4>useContext</h4>
            <button onClick={() => {
                changeQty(qty + 1)
            }}>qty:{qty}</button>
            <button onClick={() => {
                changeNum(num + 10)
            }}>num:{num}</button>
        </div>
    )
}

export default UseContext