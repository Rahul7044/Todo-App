import React, { useState } from "react";

const TodoForm = ({ handleData }) => {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.random(),
      title: input,
      status: false,
    };
    handleData(obj);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Something Here"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;