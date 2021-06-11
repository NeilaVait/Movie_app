import React, { Component } from 'react';
import TodoEl from '../appTodoEl/appTodoEl';

// ikeliam style
import './style.css';

class AppList extends Component {
  state = {};
  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map((t) => (
          <TodoEl
            onDelete={this.props.onDelete}
            onCheckUncheck={this.props.onCheckUncheck}
            singleTodo={t}
            key={t.id}
          ></TodoEl>
        ))}
      </ul>
    );
  }
}

export default AppList;
