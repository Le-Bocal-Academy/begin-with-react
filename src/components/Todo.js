import React, { useState } from "react";
import ShowIf from "./ShowIf";

const Todo = (props) => {
  // status state
  const [status, setStatus] = useState(props.status);
  // should I show the buttons?
  const [showActions, setShowActions] = useState(false);
  // should I show the input to modify body?
  const [editBody, setEditBody] = useState(false);

  // The power to ask for a new todo status!
  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus);
    props.onChangeStatus(newStatus);
  };

  // The power to ask for the todo to be deleted
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
        <ShowIf condition={showActions}>
          <span className="task-actions">
            <button className="btn edit" onClick={() => setEditBody(true)}>&#x270E;</button>
            <button className="btn delete" onClick={handleDeleteTodo}>x</button>
          </span>
        </ShowIf>
        <ShowIf condition={editBody} defaultValue={props.body}>
          <input className="task-edit" type="text" value={props.body} />
        </ShowIf>
      </div>
      <small>{props.createdAt}</small>
    </div>
  )
};

export default Todo;