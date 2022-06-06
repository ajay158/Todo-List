import React, { useState } from 'react'
import './App.css';
import Form from "./Components/Form";
import TodoList from './Components/TodoList';


function App() {
  const [inputText, setInputText] = useState(" ");  //setInputText is a function that update the inputText.
  const [todo, setTodo] = useState([]);  // setTodo is a function that update the todo.
  return (
    <div className="App">
      <header>
        <h1>Ajay's TODO-List </h1>
      </header>
      <Form inputText={inputText} todo={todo} setTodo={setTodo} setInputText={setInputText} />
      <TodoList setTodo={setTodo} todo={todo} />
    </div>
  );
}

export default App;
