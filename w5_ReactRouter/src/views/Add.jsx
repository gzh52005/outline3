import React from 'react'
import {withAuth} from '@/utils/hoc'

function Add(){
    return (
        <div>Add</div>
    )
}

Add = withAuth(Add);
export default Add;