import React from 'react'
import Context from './todoContext'
function TodoItem({data,index}) {
    return (
        <Context.Consumer>
            {
                ({remove,complete})=>{
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{data.text}</td>
                            <td>{data.done ? '是' : '否'}</td>
                            <td>
                                <button onClick={complete.bind(null,data.id)}>完成</button>
                                <button onClick={remove.bind(null,data.id)}>删除</button>
                            </td>
                        </tr>

                    )
                }
            }
        </Context.Consumer>
    )
}
export default TodoItem;