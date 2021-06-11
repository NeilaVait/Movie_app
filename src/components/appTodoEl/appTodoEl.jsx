import React, { Component } from 'react';
import './style.css';

class AppTodoEl extends Component {
  state = {};

  render() {
    const { title, isDone, id } = this.props.singleTodo;

    return (
      <li className="app-todo-el">
        <i
          onClick={() => this.props.onCheckUncheck(id)}
          className={isDone ? 'fa fa-check-circle' : 'fa fa-circle-thin'}
        ></i>
        <span className={isDone ? 'done-title' : ''}> {title} </span>
        <i className="fa fa-pencil"></i>
        <i onClick={() => this.props.onDelete(id)} className="fa fa-trash"></i>
      </li>
    );
  }
}

export default AppTodoEl;
