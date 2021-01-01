import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        todos: {
            content: null
        }
    }
    
    todoEntry = (e) =>{
        this.setState({[e.target.id] : e.target.value});
    }
    formSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        });
    }   
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <label htmlFor="content">Add Todo: </label>
                    <input type="text" name="content" id="content" onChange={this.todoEntry} value={this.state.content}/>
                </form>
            </div>
        )
    }
}
