
import React from 'react';

import TodoList from './components/TodoList'
import Home from './views/Home'

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            num:10
        }
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                num:20
            })
        },5000)
    }

    render(){
        return (
        <div>
            App: {this.state.num}
            <TodoList/>
            <Home num={this.state.num}/>
        </div>// React.createElement()
        )
    }
}

export default App;