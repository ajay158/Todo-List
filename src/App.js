import React, { useState } from 'react'
import './App.css';
import Form from "./Components/Form";
import TodoList from './Components/TodoList'


function App() {
  const [inputText, setInputText] = useState(" ");
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Ajay's TODO-List </h1>
      </header>
      <Form inputText={inputText}todo={todo} setTodo={setTodo} setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
