import React from 'react'

function Form({ setInputText, todo, setTodo, inputText }) {
    const inputTextHandler = (e) => {
        console.log(e.target.value);  // we use this because all the changes are seen when user click in that input.
        setInputText(e.target.value)  // we use this because all the changes are seen where user click on submit button.
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodo([
            ...todo, { text: inputText, completed: false, id: Math.random() * 1000 },
        ])  // ()...todo) mean that if i had  todo already in list just pass it.
        setInputText("");
    }

    
return (
    <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
)
}

export default Form