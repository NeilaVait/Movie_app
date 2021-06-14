import React, { Component } from 'react';
import TodoEl from '../appTodoEl/appTodoEl';

// ikeliam style
import './style.css';

class AppList extends Component {
  state = {};
  render() {
    const { onDelete, onCheckUncheck, onEdit, todos } = this.props;

    return (
      <ul className="todo-list">
        {todos.map((t) => (
          <TodoEl
            onEdit={onEdit}
            onDelete={onDelete}
            onCheckUncheck={onCheckUncheck}
            singleTodo={t}
            key={t.id}
          ></TodoEl>
        ))}
      </ul>
    );
  }
}

export default AppList;
