import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';

// app styles
import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: true, title: 'Buy milk', isEditOn: false },
      { id: 2, isDone: false, title: 'Buy tv', isEditOn: false },
      { id: 3, isDone: false, title: 'Go to park', isEditOn: false },
      { id: 4, isDone: false, title: 'Learn react', isEditOn: false },
    ],
    currentId: 5,
  };

  handleEdit = (editId, newTitleVal) => {
    console.log('handleEdit', editId, newTitleVal);
    const todosCopy = [...this.state.todos];
    const found = todosCopy.find((t) => t.id === editId);

    if (found.isEditOn) {
      found.title = newTitleVal;
    }

    found.isEditOn = !found.isEditOn;
    this.setState({ todos: todosCopy });
  };

  handleCheckUncheck = (todoId) => {
    const todos = [...this.state.todos];
    const found = todos.find((t) => t.id === todoId);
    found.isDone = !found.isDone;
    this.setState({ todos });
  };

  handleDelete = (todoId) => {
    console.log('click');
    const todos = this.state.todos.filter((t) => t.id !== todoId);
    this.setState({ todos });
  };

  handleAddTodo = (todoTitle) => {
    console.log('add new todo', todoTitle);

    const todosPlusnew = [...this.state.todos];
    const newTodo = { id: this.state.currentId, isDone: false, title: todoTitle, isEditOn: false };
    todosPlusnew.push(newTodo);

    this.setState({ todos: todosPlusnew, currentId: this.state.currentId + 1 });
  };

  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppList
          onEdit={this.handleEdit}
          onDelete={this.handleDelete}
          onCheckUncheck={this.handleCheckUncheck}
          todos={this.state.todos}
        />
        <AppAddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
}

export default App;
