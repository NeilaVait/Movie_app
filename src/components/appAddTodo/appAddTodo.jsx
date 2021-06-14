import React, { Component } from 'react';
import './style.css';

class AppTodo extends Component {
  state = {
    newTodo: '',
  };

  handleChange = (event) => {
    // console.log(event.target.value);
    this.setState({ newTodo: event.target.value });
  };

  sendAddTodo = () => {
    console.log(this.state.newTodo);
  };

  render() {
    return (
      <div className="add-todo-container">
        <i onClick={() => this.props.onAddTodo(this.state.newTodo)} className="fa fa-plus-circle add-icon"></i>
        <input onChange={this.handleChange} value={this.state.newTodo} type="text" placeholder="Add new todo" />
      </div>
    );
  }
}

export default AppTodo;
