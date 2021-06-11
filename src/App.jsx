import React, { Component } from 'react';
import AppHeader from './components/appHeader/appHeader';
import AppList from './components/appList/appList';
import AppAddTodo from './components/appAddTodo/appAddTodo';

// app styles
import './App.css';

class App extends Component {
  state = {
    todos: [
      { id: 1, isDone: false, title: 'Buy milk' },
      { id: 2, isDone: false, title: 'Buy tv' },
      { id: 3, isDone: false, title: 'Go to park' },
      { id: 4, isDone: false, title: 'Learn react' },
    ],
  };
  render() {
    return (
      <div className="App">
        <AppHeader />
        <AppList />
        <AppAddTodo />
      </div>
    );
  }
}

export default App;
