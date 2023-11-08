import React from "react";

export function TodoItem({completed,id,title,toggleTodo,deleteTodo,dueDate,description,priority}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <p>Title: {title}</p>
        <p>Priority: {priority}</p>
        <p>Due-Date: {dueDate}</p>
      </label>
      <p className="task-description">{description}</p>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}