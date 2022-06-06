import React from 'react'
import Todo from './Todo'

function TodoList({todo}) {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {todo.map(todo => (
                    <Todo key={todo.id} text={todo.text}/>    
                ))}
            </ul>
            <Todo />
        </div>
    )
}

export default TodoList