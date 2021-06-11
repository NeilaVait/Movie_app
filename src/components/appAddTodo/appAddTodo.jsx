import React, { Component } from 'react';

class AppTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  render() {
    return (
      <div className="add-todo-container">
        <i className="fa fa-plus-circle"></i>
        <input onChange={this.handleChange} value={this.state.newTodo} type="text" placeholder="Add new todo" />
      </div>
    );
  }
}

export default AppTodo;
