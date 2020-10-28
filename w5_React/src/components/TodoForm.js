import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props);

        // 把add方法内的this指向组件实例
        this.add = this.add.bind(this)
        this.changeText = this.changeText.bind(this)
        this.state = {
            text:''
        }
    }
    add(){
        const {addItem} = this.props;
        const {text} = this.state;
        // 获取输入框的值
        // 1. 通过节点获取（非受控组件）：document.querySelector('textarea'),ref
        // 2. 把表单的值与组件的状态进行绑定（受控组件）：this.state.xxx
        
        addItem(text)

        // 清空并获得焦点
        // setState是异步
        this.setState({
            text:'',
        },()=>{
            // 这里的代码在text改变后执行
            console.log('text2=',this.state.text)
        })
        console.log('text1=',this.state.text)
    }
    changeText(event){
        this.setState({
            text:event.currentTarget.value
        })
    }
    render(){
        const {text} = this.state;
        return (
            <div>
                <textarea value={text} onChange={this.changeText}></textarea>
                <div><button onClick={this.add}>添加</button></div>
            </div>
        )
    }
}

export default TodoForm;