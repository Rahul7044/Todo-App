import React from "react";

const TodoList = ({ data, toggleClick, deleteTodo }) => {
  return (
    <div>
      {data.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h1>{`${todo.title}`}</h1>
            {todo.status ? "Completed" : "Not Completed"}
            <button onClick={() => toggleClick(todo.id)}>Toggle</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;