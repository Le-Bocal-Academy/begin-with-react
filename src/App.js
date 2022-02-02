import React, { useState } from "react";

import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import { splitTodosByStatus } from "./lib/todos";

import './App.css';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const handleAddToDo = (todo) => {
    const newList = todoList.concat(todo);
    setTodoList(newList);
  };
  const handleUpdateToDo = (todo) => {
    const newList = todoList.map((item) => (todo.createdAt === item.createdAt) ? todo : item);
    setTodoList(newList);
  };

  const todosByStatus = splitTodosByStatus(todoList); // <= { todo, doing, done: [..........] }

  return (
    <div className="App">
      <h1>My awesome Todo List</h1>

      <CreateTodo onAddTodo={handleAddToDo} />

      <section className="task-board">
        {Object.entries(todosByStatus).map(([statusName, taskList]) => (
          <div className="task-list" key={statusName}>
            <h3>{statusName.slice(0, 1).toUpperCase() + statusName.slice(1)}</h3>
            <ul>
              {taskList.map((todo) => <li key={todo.createdAt}>
                <Todo {...todo} onChangeStatus={(status) => handleUpdateToDo({
                  ...todo,
                  status
                })} />  
              </li>)}
            </ul>
          </div>
        ))}
      </section>

    </div>
  );
}

export default App;
