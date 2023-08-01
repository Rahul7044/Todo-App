import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [data, setData] = useState([]);
  const handleData = (input) => {
    setData((prev) => {
      return [...prev, input];  
    });
  };

  const toggleClick = (id) => {
    const newTodoList = data.map((todo) => {
      return todo.id === id ? { ...todo, status: !todo.status } : todo;
    });
    setData(newTodoList);
  };

  const deleteTodo = (id) => {
    const newTodo = data.filter((todo) => todo.id !== id);
    setData(newTodo);
  };

  return (
    <div>
      <TodoForm handleData={handleData} />
      <TodoList data={data} toggleClick={toggleClick} deleteTodo={deleteTodo} />
    </div>
  );
};

export default Todo;

// props
// parent to child  with props
// child to parent  handleFunction 
// siblings         handleFunction ----parent ------siblings