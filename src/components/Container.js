import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      id: 0,
    };
    this.addTodo = this.addTodo.bind(this);
    this.editTodo = this.editTodo.bind(this);
  }
  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos.slice(), { ...todo, id: this.state.id }],
      id: this.state.id + 1,
    });
  }

  editTodo(action, id) {
    if (action === "delete") {
      this.setState({
        todos: this.state.todos.slice().filter((x) => x.id !== id),
      });
    }
    if (action === "toggleComplete") {
      this.setState({
        todos: this.state.todos
          .slice()
          .map(
            (x) =>
              (x.isComplete = x.id === id ? { ...x, isComplete: !x.isComplete } : { ...x, isComplete: x.isComplete })
          ),
      });
    }
  }
  render() {
    return (
      <div>
        <TodoForm add={this.addTodo} />
        <TodoList todos={this.state} edit={this.editTodo} />
      </div>
    );
  }
}
