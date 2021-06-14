import React, { Component } from 'react';

class FetchTest extends Component {
  state = { todoTitle: '' };

  syncTitle = (e) => {
    this.setState({ todoTitle: e.target.value });
  };

  render() {
    return (
      <div>
        {' '}
        <h1>test</h1>
        <input onChange={this.syncTitle} value={this.state.todoTitle} type="text" plaeholder="add new todo"></input>
      </div>
    );
  }
}

export default FetchTest;
