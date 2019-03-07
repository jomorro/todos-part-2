import React, { Component } from "react";

export default class Header extends Component {
  state = { new_todo: "" };

  onFormChange = event => {
    const newValue = event.target.value;

    this.setState(() => {
      return { new_todo: newValue };
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    if (this.state.new_todo.length > 0) {
      this.props.addTodo(this.state.new_todo);

      this.setState(() => {
        return { new_todo: "" };
      });
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            className="new-todo"
            placeholder="what do you need to do?"
            onChange={this.onFormChange}
            name="new-todo"
            autoFocus
            value={this.state.new_todo}
          />
        </form>
      </header>
    );
  }
}
