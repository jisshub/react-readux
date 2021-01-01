import React, { Component } from 'react'
import AddTodo from './AddTodo';
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
  addTodo = (todo, minimum=10, maximum=100)=>{
    todo.id =  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
    console.log(todo);
  };
  render() {
    return (    
      <div className='todo-app container'>
          <h1 className='center blue-text'>Todo's</h1>
          <AddTodo addTodo={this.addTodo}/>
          <Todos deleteTodo={this.deleteTodo} todos = {this.state.todos}/>
      </div>
    )
  }
}

