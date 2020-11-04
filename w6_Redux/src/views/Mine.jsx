import React from 'react'

import {withUser,withStorage,withAuth} from '../utils/hoc'

// function Mine(props){
//     console.log("Mine.props=",props);
//     return (
//     <div>Mine: {props.user && props.user.username}</div>
//     )
// }

//  Mine = withUser(Mine)
//  Mine = withStorage('currentUser')(Mine)
//  Mine = withStorage('token','currentUser','cart')(Mine)

@withStorage('currentUser')
@withAuth
class Mine extends React.Component{
    render(){
        return <div>Mine 我的</div>
    }
}
// Mine = withAuth(Mine)
export default Mine;