import React, { useState, useEffect } from 'react'
import './App.css';
import Form from "./Components/Form";
import TodoList from './Components/TodoList';


function App() {
  const [inputText, setInputText] = useState(" ");  //setInputText is a function that update the inputText.
  const [todos, setTodos] = useState([]);  // setTodo is a function that update the todo.
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() =>{
    getLocalTodos()
  }, [])
  
  useEffect(() => {
    filterHandler();
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }     
  }

  //Save to local storage
  const savelocaTodos = () =>{
     localStorage.setItem("todos", JSON.stringify(todos))
    }

  const getLocalTodos = () =>{
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]))
     }
     else{
       let todoLocal = JSON.parse(localStorage.getItem("todos"))
       setTodos(todoLocal)
     }
  }

  return (
    <div className="App">
      <header>
        <h1>Ajay's TODO-List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
