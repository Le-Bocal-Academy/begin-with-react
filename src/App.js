import React, { useState } from "react";

import CreateTodo from "./components/CreateTodo";
import Todo from "./components/Todo";
import { splitTodosByStatus } from "./lib/todos";

import './App.css';

const App = () => {
  // State control for the whole Todo List
  const [todoList, setTodoList] = useState([]);

  // The power to ADD a todo
  const handleAddToDo = (todo) => {
    const newList = todoList.concat(todo); // <= new list with one more todo!
    setTodoList(newList);
  };
  // The power to UPDATE a todo
  const handleUpdateToDo = (todo) => {
    const newList = todoList.map((item) =>
      (todo.createdAt === item.createdAt) ? todo : item // <= replace the current item with the updated todo if they are the same
    );
    setTodoList(newList);
  };
  // The power to DELETE a todo
  const handleDeleteToDo = (todo) => {
    const newList = todoList.filter((item) =>
      todo.createdAt !== item.createdAt // <= keep all todos that are NOT the deleted todo
    );
    setTodoList(newList);
  };

  const todosByStatus = splitTodosByStatus(todoList);

  return (
    <div className="App">
      <h1>My awesome Todo List</h1>

      <CreateTodo onAddTodo={handleAddToDo} />

      <section className="task-board">      {/* key */} {/* value */}
        {Object.entries(todosByStatus).map(([statusName, taskList]) => (
          <div className="task-list" key={statusName}>
            <h3>{statusName.slice(0, 1).toUpperCase() + statusName.slice(1)}</h3>
            <ul>
              {taskList.map((todo) => <li key={todo.createdAt}>
                <Todo {...todo} onChangeStatus={(status) => handleUpdateToDo({
                  ...todo, // <=  MAGIC! object spreading
                  status
                })} onDeleteTodo={() => handleDeleteToDo(todo)} />  
              </li>)}
            </ul>
          </div>
        ))}
      </section>

    </div>
  );
}

export default App;
