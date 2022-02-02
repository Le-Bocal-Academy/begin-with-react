import React, { useState } from "react";

const CreateTodo = (props) => {
  // body state control
  const [body, setBody] = useState("");
  // a function handling the creation of a todo
  const handleCreateTodo = () => {
    if (body) {
      props.onAddTodo({
        body,
        createdAt: new Date().toISOString(),
        status: "todo"
      });

      // reset the input to an empty value
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