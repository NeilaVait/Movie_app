import React, { Component } from 'react';
import './style.css';

class AppTodoEl extends Component {
  state = {
    editTitle: this.props.singleTodo.title,
  };

  handleChange = (event) => {
    this.setState({ editTitle: event.target.value });
  };

  render() {
    const { title, isDone, id, isEditOn } = this.props.singleTodo;

    const spanOrTodo = isEditOn ? (
      <input type="text" value={this.state.editTitle} onChange={this.handleChange} />
    ) : (
      <span className={isDone ? 'doneTitle' : ''}>{title}</span>
    );

    return (
      <li className="app-todo-el">
        <i
          onClick={() => this.props.onCheckUncheck(id)}
          className={isDone ? 'fa fa-check-circle' : 'fa fa-circle-thin'}
        ></i>
        {spanOrTodo}
        <i onClick={() => this.props.onEdit(id, this.state.editTitle)} className="fa fa-pencil"></i>
        <i onClick={() => this.props.onDelete(id)} className="fa fa-trash"></i>
      </li>
    );
  }
}

export default AppTodoEl;
