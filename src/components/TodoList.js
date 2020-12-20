import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        <Todo obj={this.props.todos} edit={this.props.edit} />
      </div>
    );
  }
}
