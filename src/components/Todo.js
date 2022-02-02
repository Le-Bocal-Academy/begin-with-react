import React, { useState } from "react";

const Todo = (props) => {
  const [status, setStatus] = useState(props.status);
  const [showActions, setShowActions] = useState(false);
  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus);
    props.onChangeStatus(newStatus);
  };
  const handleDeleteTodo = () => {
    props.onDeleteTodo()
  };

  return (
    <div className="task-item">
      <select value={status} onChange={(event) => handleChangeStatus(event.target.value)} className="task-status">
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <div onMouseEnter={() => setShowActions(true)} onMouseLeave={() => setShowActions(false)}>
        {showActions ? (
          <span className="task-actions">
            <button className="btn delete" onClick={handleDeleteTodo}>x</button>
          </span>
        ) : null}
        {props.body}
      </div>
      <small>{props.createdAt}</small>
    </div>
  )
};

export default Todo;