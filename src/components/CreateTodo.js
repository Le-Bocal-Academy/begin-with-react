import React, { useState } from "react";

const CreateTodo = (props) => {
  const [body, setBody] = useState("");
  const handleCreateTodo = () => {
    if (body) {
      props.onAddTodo({
        body: body,
        createdAt: new Date().toISOString(),
        status: "todo"
      });
      setBody("");
    }
  };

  return (
    <div className="create-task">
      <label>
        <input onChange={(event) => setBody(event.target.value)} type="text" placeholder="Enter a new thing to do..." value={body} />
      </label>
      <button onClick={() => handleCreateTodo()}>Create</button>
    </div>
  )
};

export default CreateTodo;