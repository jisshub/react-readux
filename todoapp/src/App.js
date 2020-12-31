import React, { Component } from 'react'
import Todos from './Todos';
export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'first content goes here'},
      {id: 2, content: 'second content goes here'}
    ]
  }
  render() {
    return (  
      <div className='App'>
          <h1 className='center blue-text'>Todo's</h1>
          <Todos todos = {this.state.todos}/>
      </div>
    )
  }
}

