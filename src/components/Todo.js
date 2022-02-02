import React from "react";

const Todo = (props) => {
  return (
    <div className="task-item">
      <div>{props.body}</div>
      <small>{props.createdAt}</small>
    </div>
  )
};

export default Todo;