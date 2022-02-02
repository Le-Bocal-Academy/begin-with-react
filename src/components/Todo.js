import React, { useState } from "react";

const Todo = (props) => {
  const [status, setStatus] = useState(props.status)
  const handleChangeStatus = (newStatus) => {
    setStatus(newStatus);
    props.onChangeStatus(newStatus);
  };
  return (
    <div className="task-item">
      <select value={status} onChange={(event) => handleChangeStatus(event.target.value)}>
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <div>{props.body}</div>
      <small>{props.createdAt}</small>
    </div>
  )
};

export default Todo;