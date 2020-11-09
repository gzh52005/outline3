import React,{useState} from 'react';

import UseState from './UseState'
import UseEffect from './UseEffect'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'

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
            <UseMemo/> */}
            <UseCallback/>
        </div>
    )
}

export default Hook;