import React from 'react'
import TodoItem from './TodoItem';

export default function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos && props.todos.map(todo => (
        <TodoItem
          key={todo.id}
          title={todo.title}
          completed={todo.completed}
          completeTodo={props.handleCompleteTodoClick(todo.id)}
          removeTodo={props.handleRemoveTodoClick(todo.id)}
        />
      ))}
    </ul>
  )
}
