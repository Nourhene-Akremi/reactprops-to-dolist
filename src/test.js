import React, { Component } from 'react';
export default class Test extends Component {
  state = { isInvisible: false };
  toggleButton = () => {
    this.setState({ isInvisible: !this.state.isInvisible });
  };
  todos = [
    'welcome to first try class',
    'why this is not working',
    'this is super annoying',
  ];

  render() {
    return (
      <div>
        <button onClick={this.toggleButton}>
          {this.state.isInvisible ? 'click to hide me ' : 'to show me'}{' '}
        </button>
        {this.state.isInvisible ? (
          <ul>
            {this.todos.map((el, i) => (
              <li key={i}> {el}</li>
            ))}
          </ul>
        ) : (
          <h2>leave me alone</h2>
        )}
      </div>
    );
  }
}
