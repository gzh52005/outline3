import React from 'react'

import TodoContent from './TodoContent'
import TodoForm from './TodoForm'

import Context from './todoContext'

class TodoList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            datalist: [
                {
                    id: 1,
                    text: '实现小目标，月入过万',
                    done: false,
                    date: new Date()
                },
                {
                    id: 2,
                    text: '迎娶白富美，走上人生巅峰',
                    done: false,
                    date: new Date(),
                },
                {
                    id: 3,
                    text: '出任CEO，达到疯癫状态',
                    done: false,
                    date: new Date(),
                }
            ]
        }
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
    }
    // 添加
    addItem(text) {
        const newItem = {
            id: parseInt(Math.random() * 1000000),
            text,
            done: false,
            date: new Date(),
        }
        const newDatalist = [newItem, ...this.state.datalist]
        this.setState({
            datalist: newDatalist
        })

        console.log('datalist=', this.state.datalist)
    }

    // 删除
    removeItem(id){
        console.log('removeItem.id=',id)
        const newDatalist = this.state.datalist.filter(item=>item.id!==id);
        this.setState({
            datalist:newDatalist
        })
    }

    // 完成
    completeItem(id){
        const {datalist} = this.state;
        const newDatalist = datalist.map(item=>{
            if(item.id === id){
                item.done = true
            }
            return item;
        });

        this.setState({
            datalist:newDatalist
        })
    }
    render(){
        const {datalist} = this.state;
        return (
            <Context.Provider value={{remove:this.removeItem,complete:this.completeItem}}>
                <div>
                    <TodoContent datalist={datalist}/>
                    <TodoForm addItem={this.addItem}/>
                </div>
            </Context.Provider>
        )
    }
}

export default TodoList;