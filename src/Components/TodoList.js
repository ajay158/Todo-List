import React from 'react'
import Todo from './Todo'

function TodoList({ todo, setTodo }) {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todo.map((todo) => (
                    <Todo setTodo={setTodo} todos={todo} todo={todo} key={todo.id} text={todo.text} />
                ))}
            </ul>
            {/* <Todo /> */}
        </div>
    )
}


export default TodoList;