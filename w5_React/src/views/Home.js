import React,{Component} from 'react'
// import * as ReactAll from 'react'
// console.log('ReactAll=',ReactAll)

class Home extends Component{
    constructor(){
        super()
        console.log('constructor')
        this.state = {
            qty:1,
            user:{}
        }
    }
    UNSAFE_componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')

        // let user = ajax()// 
        // this.setState({user})
        // setTimeout(()=>{
        //     this.setState({
        //         user:{username:'laoxie',password:123456}
        //     })
        // },5000)
    }

    UNSAFE_componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    UNSAFE_componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        console.log('props=',this.props,nextProps)
        // this.state：当前状态，
        // nextState：将要修改的状态
        // this.props: 当前父组件传入的值
        // nextProps：父组件数据修改后传入的值

        // qty为5的倍数时才刷新组件
        // return nextState.qty%5===0;
        return true;
    }
    render(){
        console.log('render')
        const {qty,user} = this.state;
        return <div>
            Home: {user.username}
            <button onClick={()=>{
                this.setState({
                    qty:this.state.qty+1
                })
            }}>qty:{qty}</button>
        </div>
    }
}

export default Home