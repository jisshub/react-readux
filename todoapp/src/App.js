import React, { Component } from 'react'
import Todos from './Todos';
export default class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'first content goes here'},
      {id: 2, content: 'second content goes here'}
    ]
  }
  deleteTodo = (id) =>{
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };
  render() {
    return (    
      <div className='todo-app container'>
          <h1 className='center blue-text'>Todo's</h1>
          <Todos deleteTodo={this.deleteTodo} todos = {this.state.todos}/>
      </div>
    )
  }
}

