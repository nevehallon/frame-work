import React, { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.value.trim()) {
      // console.log(this.state.value);
      this.props.add({
        todo: this.state.value,
        isComplete: false,
      });
    }
    this.setState({
      value: "",
    });
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="Enter todo" value={this.state.value} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
