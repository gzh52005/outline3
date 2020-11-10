import React,{useCallback} from 'react';

import {useStorage} from '../hooks'

function MyHook(){
    const [currentUser,updateUser] = useStorage('userInfo')
    console.log('currentUser=',currentUser);
    const [token,changeToken] = useStorage('token')
    console.log('token=',token);

    const changeUsername = useCallback(function(){
        updateUser({username:'xiaoxie',password:1234})
    },[])
    return (
        <div>
            <h1>自定义Hook: useStorage</h1>
            {JSON.stringify(currentUser)}
            <button onClick={changeUsername}>修改username</button>
            <p>Token: {token}</p>
        </div>
    )
}

export default MyHook;