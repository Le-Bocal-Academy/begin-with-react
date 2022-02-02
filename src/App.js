import React, { useState } from "react";

import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";

import './App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddToDo = (todo) => {
    const newList = todoList.concat(todo);
    setTodoList(newList);
  };

  return (
    <div className="App">
      <h1>My awesome Todo List</h1>

      <CreateTodo onAddTodo={handleAddToDo} />

      <div className="task-list">
        <ul>
          {todoList.map((todo) => <li key={todo.createdAt}>
            <Todo {...todo} />  
          </li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
