import React,{useContext, useState} from 'react';

import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import UseContext from './UseContext'
import UseReducer from './UseReducer'


import {context} from '../store'

function Hook(){
    const [showEffect,change] = useState(true)
    const {state:goodslist} = useContext(context);
    return (
        <div>
            <h1>Hook</h1>
            <div>购物车：{goodslist.length}</div>
            {/* <UseState/>
            <div onClick={()=>{change(!showEffect)}}>
            {
                showEffect ? 
                <UseEffect/>
                :
                '隐藏'
            }
            </div>
            <UseMemo/>
            <UseCallback/>
            <UseContext/> */}
            <UseReducer/>
        </div>
    )
}

export default Hook;