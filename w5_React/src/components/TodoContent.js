import React from 'react'

import TodoItem from './TodoItem'

function TodoContent({ datalist }) {
    const completeList = datalist.filter(item=>item.done)
    const unDoneList = datalist.filter(item=>!item.done)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>待办事项</th>
                        <th>是否完成</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datalist.map((item, idx) => <TodoItem
                            key={item.id}
                            data={item}
                            index={idx}
                        />)
                    }

                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">总数：{datalist.length}，完成：{completeList.length}，未完成：{unDoneList.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}
export default TodoContent;