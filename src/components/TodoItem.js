import React from "react";

export default function TodoItem({
  completed,
  title,
  completeTodo,
  removeTodo
}) {
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => completeTodo()}
        />
        <label>{title}</label>
        <button className="destroy" onClick={() => removeTodo()} />
      </div>
    </li>
  );
}
