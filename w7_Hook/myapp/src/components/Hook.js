import React,{useState} from 'react';

import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import UseContext from './UseContext'
import UseReducer from './UseReducer'

function Hook(){
    const [showEffect,change] = useState(true)
    return (
        <div>
            <h1>Hook</h1>
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