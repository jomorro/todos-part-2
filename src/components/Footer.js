import React from "react";
import { NavLink } from 'react-router-dom';

export default function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todo_count - props.completed_count}</strong> item(s) left
      </span>
      <ul className="filters">
        <li><NavLink exact to="/" activeClassName="selected">All</NavLink></li>
        <li><NavLink exact to="/active" activeClassName="selected">Active</NavLink></li>
        <li><NavLink exact to="/completed" activeClassName="selected">Completed</NavLink></li>
      </ul>
      {props.completed_count > 0 && <button className="clear-completed" onClick={props.clearCompleted}>Clear completed</button>}
    </footer>
  );
}
