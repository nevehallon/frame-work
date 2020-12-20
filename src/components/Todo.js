import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(props);
  }
  render() {
    let todos = this.props.obj.todos.sort((a, b) => (b.isComplete ? -1 : 1));
    todos = todos.map((item) => (
      <li style={item.isComplete ? { textDecoration: "line-through" } : { textDecoration: "none" }} key={item.id}>
        <input onChange={() => this.props.edit("toggleComplete", item.id)} type="checkbox"></input>
        {item.todo} <button onClick={() => this.props.edit("delete", item.id)}>Delete</button>
      </li>
    ));
    todos = todos.length ? <ol>{todos}</ol> : <i>Nothing to do yet...</i>;
    return <>{todos}</>;
  }
}
